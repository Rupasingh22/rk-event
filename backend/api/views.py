from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from pymongo import MongoClient
import json

# MongoDB Connection
client = MongoClient("mongodb://localhost:27017/")
db = client["rk_event_db"]
users = db["users"]
bookings = db["bookings"]


@csrf_exempt
def register(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)

            user = {
                "name": data.get("name"),
                "email": data.get("email"),
                "phone": data.get("phone"),
                "eventType": data.get("eventType"),
                "password": data.get("password")
            }

            users.insert_one(user)

            return JsonResponse({
                "message": "Registration Successful"
            }, status=201)

        except Exception as e:
            return JsonResponse({
                "message": str(e)
            }, status=400)

    return JsonResponse({
        "message": "Only POST Request Allowed"
    }, status=405)

from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def login(request):
    if request.method == "POST":

        data = json.loads(request.body)

        email = data.get("email")
        password = data.get("password")

        user = users.find_one({
            "email": email,
            "password": password
        })

        if user:
            return JsonResponse({
                "success": True,
                "name": user["name"],
                "email": user["email"]
            })

        return JsonResponse({
            "success": False,
            "message": "Invalid Email or Password"
        })

    return JsonResponse({
        "message": "Only POST Request Allowed"
    })

from bson import ObjectId

admins = db["admins"]

@csrf_exempt
def admin_login(request):
    if request.method == "POST":
        data = json.loads(request.body)

        email = data.get("email")
        password = data.get("password")

        admin = admins.find_one({
            "email": email,
            "password": password
        })

        if admin:
            return JsonResponse({
                "success": True,
                "email": admin["email"]
            })

        return JsonResponse({
            "success": False,
            "message": "Invalid Admin Credentials"
        })

    return JsonResponse({"message": "Only POST Allowed"})


@csrf_exempt
def admin_stats(request):

    total_users = users.count_documents({})
    total_bookings = bookings.count_documents({})

    return JsonResponse({
        "totalUsers": total_users,
        "totalBookings": total_bookings
    })

@csrf_exempt
def get_users(request):
    data = []

    for user in users.find():
        data.append({
            "id": str(user["_id"]),
            "name": user["name"],
            "email": user["email"],
            "phone": user["phone"],
            "eventType": user["eventType"]
        })

    return JsonResponse(data, safe=False)


@csrf_exempt
def delete_user(request, user_id):
    users.delete_one({
        "_id": ObjectId(user_id)
    })

    return JsonResponse({
        "success": True
    })
@csrf_exempt
def book_event(request):
    if request.method == "POST":

        data = json.loads(request.body)

        booking = {
            "name": data.get("name"),
            "email": data.get("email"),
            "phone": data.get("phone"),
            "eventType": data.get("eventType"),
            "date": data.get("date"),
            "guests": data.get("guests"),
            "message": data.get("message")
        }

        bookings.insert_one(booking)

        return JsonResponse({
            "success": True,
            "message": "Event Booked Successfully"
        })

    return JsonResponse({
        "message": "Only POST Allowed"
    })
@csrf_exempt
def get_bookings(request):

    data = []

    for booking in bookings.find():
        data.append({
            "id": str(booking["_id"]),
            "name": booking["name"],
            "email": booking["email"],
            "phone": booking["phone"],
            "eventType": booking["eventType"],
            "date": booking["date"],
            "guests": booking["guests"],
            "message": booking["message"]
        })

    return JsonResponse(data, safe=False)


@csrf_exempt
def delete_booking(request, booking_id):

    bookings.delete_one({
        "_id": ObjectId(booking_id)
    })

    return JsonResponse({
        "success": True
    })

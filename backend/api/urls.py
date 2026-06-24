from django.urls import path
from .views import *

urlpatterns = [
    path("register/", register),
    path("login/", login),

    path("admin-login/", admin_login),
    path("admin-stats/", admin_stats),
    path("users/", get_users),
    path("delete-user/<str:user_id>/", delete_user),
    path("book-event/", book_event),
    path("bookings/", get_bookings),
    path("delete-booking/<str:booking_id>/", delete_booking),
]
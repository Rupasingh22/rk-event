from db import users_collection

data = {
    "name": "Rupa",
    "email": "rupa@gmail.com"
}

users_collection.insert_one(data)

print("Data Inserted Successfully")
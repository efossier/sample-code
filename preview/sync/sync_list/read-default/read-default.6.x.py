# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

sync_lists = client.preview \
                   .sync \
                   .services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                   .sync_lists \
                   .list()

for record in sync_lists:
    print(record.sid)

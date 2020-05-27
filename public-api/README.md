# Public API

## Authentication

The public API is authenticated using authorization-bearer authentication. You can generate a token by emailing the Adalo team.

Send the following header:

```
Authorization: Bearer s7f98jo32jlseznml3n
```

## Notifications

The notifications API makes it possible to send push notifications (iOS & Android) to specific users, by ID, email, or username. In most cases, you will not have the user's ID (unless you’re receiving it from Zapier), so email or username are usually preferred.

### `POST /notifications` - Trigger a notification

Post Body (JSON):

```
{
  "appId": "2bc38ea8-2eb1-4db0-974c-e9e031f2c0e0",
  "audience": { "email": "user@example.com" },
  "notification": {
    "titleText": "Hello There",
    "bodyText": "This is just a test..."
  }
}
```

#### Caveats

* Currently it is not possible to set which screen the user will be taken to. For now, they will be taken to the app's home screen.
* Currently it is not possible to send notifications to multiple users simultaneously. If you would like to do this, please send multiple requests.

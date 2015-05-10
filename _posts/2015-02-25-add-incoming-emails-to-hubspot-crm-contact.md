---
layout: post
title:  "Easily add Incoming Emails to a HubSpot CRM Contact"
date:   2015-02-25 09:00:00
category: Inbound Marketing
excerpt: "There are a number of ways to add incoming emails to a HubSpot CRM Contact. Unfortunately none of the available solutions is truly automated."
cover: add-incoming-emails-to-hubspot-crm-contact.jpg
author: Franz Geffke
---

There are a number of ways to add incoming emails to a HubSpot CRM Contact. Unfortunately none of the available solutions is truly automated (you cannot simply forward all incoming emails).

Let's have a look at the options:

### Filing Options

#### 1. [hubspotID] @ forward.hubspot.com

- Must be forwarded from within your email client
- Looks for you as the sender
- Looks for your contact within the forwarded messages

If the emails do not show up in HubSpot, make sure the forwarded message contains a similar snippet:


```---------- Forwarded message ----------
From: FROMNAME <from@example.com>
Date: Wed, Feb 25, 2015 at 2:45 PM
Subject: Easily add Incoming Emails to a HubSpot CRM Contact
To: TONAME <to@example.com>
Cc: CCNAME <cc@example>
```

_This snippet is missing if you have your email server / Gmail simply forward the email to HubSpot._

#### 2. [hubspotID] @ bcc.hubspot.com

- Only works as BCC address
- Looks for you as the sender
- Looks for your contact as the recipient

#### 3. Sidekick by HubSpot

Sidekick comes with a number of plugins that allow you to log emails from within the following clients:

- Gmail / Google Apps
- Microsoft Outlook
- Mac OS X Mail.app

#### 4. General [has not been implemented]

- Automatically forward some / all incoming email
- Looks for you as the recipient
- Looks for your contact as the sender

Once HubSpot implements a general forwarding email address, we will be able to automatically file all incoming emails.

### Set-Up forwarding in Google Apps

***Note: Until HubSpot implements Option 4, we cannot take advantage of this feature.***

Tip for Google Apps users: Since you cannot actually verify the HubSpot address, you need to add the email address trough the Google Admin console.

1. Open your [Google Admin Console][google-admin]
2. Navigate to Users > USERNAME > Account > Email Routing
3. 'Add another destination'
4. Enter the desired email as 'Destination'
5. Leave 'Change SMTP envelope' checked
6. Save Changes

![Google Admin Console: Email Routing]({{ site.blog_img }}add-incoming-emails-to-hubspot-crm-contact-01.png)

### Gmail / Google Apps Email Sync

HubSpot is apparently also working on another treat for us:

> [...] the ability to connect directly to your gmail inbox to pull messages and replies for the timeline.

<br>

***We will update this article periodically.***

[google-admin]: http://admin.google.com

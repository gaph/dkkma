---
layout: post
title:  "Connect Wufoo with HubSpot CRM (Create Contact)"
date:   2015-02-25 08:00:00
category: Productivity
excerpt: "Easily connect Wufoo and HubSpot CRM to automatically create new contacts / leads."
cover: connect-wufoo-with-hubspot-crm.jpg
---

Manual data entry is not only time-consuming but really boring! Luckily we have tools such as Zapier to help us connect cloud apps that would have otherwise been 'incompatible'.

Anyways, let's get started! Here's what you need:

### Requirements:
- Wufoo Account
- Zapier Account*
- HubSpot CRM Account
- Around 10 minutes of your valuable time

_*HubSpot is a premium connection. You will require a Zapier subscription._

### Get started:

First log in to your Zapier account and create a ‘New Zap’. If you do not have a Zapier account, you can sign-up for a trial here [Sign-Up for Zapier][zapier-sign-up] (+ Receive 100 extra tasks per month).

- Log into your Zapier account and create a New Zap

**1. Choose a trigger and action**

- Wufoo “New Entry” _- the trigger_
- HubSpot “Create or Update Contact” _- the action_

![Zapier: Create a New Zap to connect Wufoo and HubSpot CRM]({{ site.blog_img }}connect-wufoo-with-hubspot-crm-01.png)

**2. Select Wufoo Account**

- Select your Wufoo Account

**3. Select HubSpot account**

- Enter your Hub ID “000000” (Usually 6 digits)

**4. Filter Wufoo triggers**

Only trigger a "New Entry" from Wufoo when...

- Choose the form you'd like to watch for new entries.

![Wufoo: Select your contact form]({{ site.blog_img }}connect-wufoo-with-hubspot-crm-02.png)

_Optional: Add filters based on other Wufoo fields to only allow some items: Here you could filter out all submissions that do not contain a message._

**5. Match up Wufoo Entry to HubSpot**

Match all Wufoo fields. Example:

- Email
- First Name
- Last Name
- Company Name
- Website
- Message to Notes (You can add always multiple values: _[Message] send via [PageURL]_)

_Optional: Set the Lifecycle Stage to ‘lead’._

![Match up Wufoo form fields with HubSpot CRM contact fields.]({{ site.blog_img }}connect-wufoo-with-hubspot-crm-03.png)

**6. Test this Zap**

Here you can test the 'Zap' you've just created. _Note: Your Wufoo form should contain at least one entry._

**7. Name and turn this Zap on**

Give your 'Zap' a meaningful name and turn it on!

_This Zap is instant. It will trigger immediately when we receive a new Wufoo Entry._

### All Done!

If everything has been set-up correctly, the next submission trough your contact form should automatically create a new contact in your HubSpot CRM account.

[zapier-sign-up]: http://zpr.io/z75j

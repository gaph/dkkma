---
layout: post
title:  "Sync Salesforce with Exchange and Mac"
date:   2014-01-10 08:00:00
category: Productivity
excerpt: "It's never been easy to find the right CRM solution but since we've recently settled on Salesforce, we started dealing with a lot of integration issues. Our biggest headache was the sync between Salesforce and Exchange."
cover: sync-salesforce-with-exchange-and-mac.jpg
---

It's never been easy to find the right CRM solution but since we've recently settled on Salesforce, we started dealing with a lot of integration issues. Our biggest headache was the sync between Salesforce and Exchange. While Salesforce provides a plugin for Outlook on Windows, none of us is on Windows. Aside from that, it will only work while your Outlook is running. Luckily we've stumbled upon Yoxel sync. This neat little 'cloud connector' plugs into your Salesforce and Microsoft Exchange (or Google) account and syncs addresses, calendar, tasks and e-mail conversations.

For the benefit of all, we'll quickly run you trough the set-up:

- Download & Install Yoxel trough the appexchange (any SF edition!)
- Sign up for Yoxel
- Add your Exchange and Salesforce account (Salesforce will ask for authorization)
- Watch it sync (Salesforce <-> Yoxel <-> Exchange <-> Devices, Desktop)

Now, the beauty of it is, that it works. Yes! My tasks show up on my iPhone, the calendar syncs two-way (So I can actually add a new entry on my Mac, have it sync to Salesforce and then assign it to a client). However, there are a few things to take note of:

- Yoxel will sync with your 'Contacts' group. You cannot actually have it sync with, let's say, the 'Salaesforce' group. I'd recommend heading over to the Mac contacts app to create a new group called 'Friends' or 'Family'. Make sure to move all contacts, except work related contacts to this group. This is to make sure they wont sync to Salesforce.
- You e-mails / Conversations do not show up? Have a look at this article.
- Your e-mails won't show up like activities usually do in Salesforce but much rather as conversations. Apparently yoxel is working to change this in the future!

We're really happy with the set-up and there's a lot less double entry - If you have any questions or need help, please drop a message below. We'll be glad to assist. Also, do share your experience with other CRM software or sync solutions.

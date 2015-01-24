---
layout: post
title:  "Connect Harvest to Quickbooks Online"
date:   2014-04-02 08:00:00
category: Business
excerpt: "If you are using Harvest to track your time and Invoice your clients, here is something you have been waiting for: A native Harvest to Quickbooks Online connection."
cover: connect-harvest-to-quickbooks-online.jpg
---

If you are using Harvest to track your time and Invoice your clients, here is something you have been waiting for: A native Harvest to Quickbooks Online connection.

This feature is still in BETA and likely not bug free. If you are still willing to give it a shot, we recommend you to get in touch with the Harvest Support and ask them to activate the feature in your account. Once activated, you can follow this guide to get started: Connect Harvest with Quickbooks Online

![Connect Harvest to Quickbooks Online]({{ site.blog_img }}connect-harvest-to-quickbooks-online-01.png)

**There are some things that bother us:**

Other Currencies – Harvest invoices created in other currencies will be copied in your QuickBooks Online default currency. This basically means that if you are Invoicing a client in Euro but your default currency is set to Pound, you are going to run into issues because

- When we first copied over an Invoice of a new, Euro client, the client appeared in Quickbooks as a Pound client so all future Invoices in Quickbooks will be stored in Pounds rather then the original Euro.
- We went ahead and manually created a Euro client in Quickbooks. Now we tried to copy over a Euro Invoice from this client to Quickbooks. This resulted in an error.


**UPDATE**: We got in touch with Harvest to see what may be causing this.

> I looked into this with our developers and it looks like the Quickbooks API only allows for one type of currency. Sorry I don't have better news!

**UPDATE 2**: Harvest got back to us with this message.

> At the moment, the Quickbooks integration doesn't pass any currency information when the invoice is copied - it's just a number, that Quickbooks translates upon import.

Apparently it's up to Intuit to make this work unless the team at Harvest finds a way around these limitions.
We tested this using a Harvest Client (Euro) going to a Quickbooks Client (Euro) with Quickbooks Online set to Pounds as default currency. The Invoice that has been created in Quickbooks Online correctly states Euro - not Pounds.


### Our recommendation:

If you are only invoicing in one currency, this is a huge time saver. Everyone dealing with multiple currencies should hold out to see what the Harvest team comes up with. We have already send an enquiry but have yet to hear back from Harvest regarding this.

It's awesome to have both services integrated. However, you may encounter bugs as this is currently in the Beta phase.


### Don't have Harvest?

If you sign up trough our affiliate link, you get a 30 days Harvest trial and USD 10 credit towards your first bill. [Sign up for Harvest now][signup].

[signup]: http://try.hrv.st/3-88144

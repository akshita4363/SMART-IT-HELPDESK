# 🔐 Smart IT Helpdesk — ServiceNow Application

![ServiceNow](https://img.shields.io/badge/Platform-ServiceNow-green?style=for-the-badge&logo=servicenow)
![App Engine](https://img.shields.io/badge/Built%20With-App%20Engine%20Studio-blue?style=for-the-badge)
![Flow Designer](https://img.shields.io/badge/Automation-Flow%20Designer-orange?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge)

---

## 📌 Project Overview

A fully scoped **Smart IT Helpdesk Application** built on the **ServiceNow platform** using **App Engine Studio**. The system enables employees to raise IT issues and request IT items, which are then automatically managed, assigned, tracked, and resolved by IT agents — with end-to-end automation requiring minimal manual intervention.

---

## 🚀 Key Features

- 🎫 **Incident Management** — Employees raise IT issues (hardware, software, network)
- 📋 **Service Request Management** — Employees request new IT items (laptop, software, access)
- 🤖 **Keyword-Based Priority Escalation** — Auto-detects urgency words in description and sets priority
- 🔁 **Auto Ticket Assignment** — Network incidents automatically assigned to IT agent
- ✅ **Approval Workflow** — Service requests go through automated approval via Flow Designer
- 📧 **Email Notifications** — Caller notified instantly when ticket is created
- ⏱️ **SLA Tracking** — Automatic SLA timers based on priority (4 / 8 / 24 hours)
- 📊 **Reports & Dashboards** — Visual reports by state, priority, and category

---

## 🏗️ Architecture

```
Employee (John User)
        │
        ▼
  Raises Ticket
        │
   ┌────┴─────┐
   │          │
Incident   Service Request
   │          │
   ▼          ▼
Business   Flow Designer
 Rules      Approval
   │          │
   ▼          ▼
Auto Assign  Email Sent
 to Agent   to Employee
   │
   ▼
SLA Timer Starts
   │
   ▼
IT Agent (Mike Agent) Resolves
   │
   ▼
Ticket Closed ✅
```

---

## 🗂️ Tables

### Incident Table — `SINC` prefix
| Field | Type |
|---|---|
| Caller | Reference → User |
| Category | Choice |
| Priority | Choice |
| State | Choice |
| Assigned To | Reference → User |
| Description | String |

### Service Request Table — `SREQ` prefix
| Field | Type |
|---|---|
| Request Type | Choice |
| Requested For | Reference → User |
| Approval Status | Choice |
| Delivery Date | Date |

---

## ⚙️ Automation Summary

| Component | Count | Purpose |
|---|---|---|
| Business Rules | 3 | Server-side automation |
| Client Scripts | 2 | Browser-side form behavior |
| UI Policies | 1 | Field control |
| Flow Designer Flows | 1 | Approval workflow |
| Notifications | 1 | Email alerts |
| SLAs | 3 | Time-based resolution tracking |
| Reports | 3 | Data visualization |

---

## ⏱️ SLA Configuration

| Priority | Resolution Time |
|---|---|
| 2 - High | 4 Hours |
| 3 - Moderate | 8 Hours |
| 4 - Low | 24 Hours |

---

## 👥 Roles & Users

| Name | User ID | Role |
|---|---|---|
| John User | john.user | user |
| Mike Agent | mike.agent | agent |

---

## 🧪 End-to-End Test Scenario

```
1. John creates Incident → Category=Network, Description="internet not working urgently"
2. Keyword "urgently" detected → Priority auto set to Critical ✅
3. Alert popup appears on form ✅
4. Description becomes MANDATORY (UI Policy) ✅
5. Ticket saved → SINC0001001 generated
6. Auto assigned to Mike Agent ✅
7. SLA Timer starts → 4 hours ✅
8. Email sent to John ✅
9. Mike resolves → Ticket Closed ✅
```

---

## 📁 Repository Structure

```
smart-it-helpdesk-servicenow/
│
├── README.md
├── business-rules/
│   ├── auto_assign_network.js
│   ├── set_default_priority.js
│   └── keyword_priority_escalation.js
├── client-scripts/
│   ├── priority_alert.js
│   └── auto_fill_category.js
├── screenshots/
└── docs/
    └── full_project_documentation.md
```

---

## 🛠️ Tech Stack

`ServiceNow` `App Engine Studio` `Flow Designer` `Business Rules` `Client Scripts` `UI Policies` `JavaScript` `SLA Management` `ServiceNow Reports`

---

## 📝 Resume One-Liner

> Built a scoped IT helpdesk app on ServiceNow to manage employee incidents and service requests. Automated ticket assignment, priority escalation via keyword detection, SLA tracking, and approval workflows using Business Rules, Client Scripts, UI Policies, and Flow Designer.

---

## 🙋 Author

**Your Name**
- 💼 [LinkedIn](https://linkedin.com/in/your-profile)
- 🐙 [GitHub](https://github.com/your-username)

> ⭐ Star this repo if you found it helpful!

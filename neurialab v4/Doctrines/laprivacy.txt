Here is a **production-ready, legally clean, explicitly reassuring PRIVACY.md**, written for a *memoryless, auditable, zero-persistence web application*.

After that, I’ll give you a recommended **`md/` directory structure** for all governance docs so the repo stays crisp and understandable for auditors.

---

# **📄 PRIVACY.md (Final, Commit-Ready)**

```markdown
# Privacy Policy — Alchemical Prodex
**Version 1.0**  
**License: AGPL-3.0**  
**Status: Draft**

The Alchemical Prodex is designed as a **zero-data, zero-persistence application**.  
This document explains the privacy guarantees, technical constraints, and user protections built into the system.

The Prodex is intended for vulnerable populations and high-risk emotional states.  
To protect users, the Prodex adheres to a strict philosophy:

> **No collection, no retention, no transmission.  
> No identity, no logs, no archive.  
> Ever.**

---

## 1. No Data Collection

The Prodex does **not** collect or store any personal information.

Specifically, the application collects **none** of the following:

- Names  
- Emails  
- IP addresses  
- Device identifiers  
- Browser fingerprints  
- Location data  
- Session identifiers  
- Analytics or usage metrics  
- User-generated reflections, notes, or meeting content

There is **no backend server** and **no database**.

---

## 2. No Persistence — Memory Only

All temporary session data exists **only in RAM** while the browser tab or app is open.

When the user:

- closes the tab  
- refreshes the page  
- exits the PWA  
- kills the mobile app  
- loses power  

**All data is immediately erased.**

No data is written to:

- `localStorage`  
- `sessionStorage`  
- `indexedDB`  
- cookies  
- cache storage  
- filesystem  

This is a foundational architectural invariant.

---

## 3. No Networking After Initial Load

After loading static files (HTML, CSS, JS, JSON) from the hosting origin:

- The Prodex performs **no additional network calls**.
- There is **no communication with any server**.
- There is **no cloud storage**.
- There is **no telemetry**.

If a network request appears in audit logs, it is considered a **security bug**.

---

## 4. Service Worker Behavior

The service worker (if enabled) is used only for:

- caching static assets  
- supporting offline functionality  

The service worker **does not**:

- capture requests  
- log traffic  
- store session data  
- sync to any external services  
- send analytics  

Users may review the full service worker source code in `src/sw.js`.

---

## 5. Meeting Mode and Device Passing

All meeting interactions are ephemeral.  
For multi-user gatherings:

- No participant information is stored.
- No share content is recorded.
- No history or recap is generated.
- Closing the app destroys the meeting.

“Device-passing mode” preserves anonymity by design.

---

## 6. Third-Party Dependencies

The Prodex uses minimal dependencies, pinned in the lockfile.  
No dependency is permitted if it:

- performs analytics  
- makes external calls  
- fingerprints users  
- requires accounts  
- includes telemetry  

Any dependency violating these terms is removed immediately.

---

## 7. Local Inspection and User Auditing

Users are encouraged to audit:

- source code  
- network requests  
- local storage usage  
- service worker behavior  
- build scripts  

The Prodex is open source under AGPL-3.0.  
If any persistence or tracking is discovered, issue a report via GitHub.

---

## 8. Data Rights

Because the Prodex does **not** store data:

- there is no personal data to access  
- nothing to delete  
- nothing to export  
- nothing to rectify  
- nothing to secure  

Your privacy is protected by **architecture**, not policy.

---

## 9. Changes to this Document

Updates to this privacy policy will be versioned and visible in version control.  
Changes are announced through release notes.

---

## 10. Contact & Reporting

To report a privacy concern or suspected violation:

- Open an issue on the GitHub repository **OR**
- Email the maintainer listed in the repository metadata

Privacy is a core objective of this project.  
Reports are treated with the highest priority.

---

**End of Privacy Policy**  
```

---

# **Recommended `md/` Directory Structure**

Keeping governance docs in a dedicated directory makes the repo clean and audit-friendly.
Here’s the structure I recommend:

```
md/
  PRIVACY.md
  SECURITY.md
  REPRODUCIBLE-BUILD.md
  ARCHITECTURE.md
  GOVERNANCE.md
  LICENSE-SUMMARY.md
```

### Explanation of each:

* **PRIVACY.md**
  The file above. Zero data retention guarantees.

* **SECURITY.md**
  Threat model, researcher guidelines, what constitutes a security violation.

* **REPRODUCIBLE-BUILD.md**
  Build instructions, hashing, how to verify the release.

* **ARCHITECTURE.md**
  Document the “memoryless machine,” file layout, constraints.

* **GOVERNANCE.md**
  Rules for contributions, what PRs will be rejected (e.g., adding persistence).

* **LICENSE-SUMMARY.md**
  Plain English explanation of AGPLv3 obligations.

This keeps the repo’s root uncluttered while providing an audit-ready documentation cluster.

---

If you want next:

* **SECURITY.md**,
* **REPRODUCIBLE-BUILD.md**,
* or the **directory tree with placeholder files**,

just tell me which one to generate.

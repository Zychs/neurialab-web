# Security Policy — Alchemical Prodex
**Version 1.0**  
**License: AGPL-3.0**  
**Status: Draft**

The Alchemical Prodex is intentionally designed as a **zero-state, zero-storage, zero-telemetry** web application.  
Because this project supports vulnerable populations, security, anonymity, and transparency are treated as primary requirements, not optional enhancements.

This document defines:

- The threat model  
- Expected security posture  
- Accepted and rejected contributions  
- Disclosure guidelines  
- What constitutes a security violation  

---

# 1. Security Philosophy

The Prodex follows three core principles:

1. **Do not store user data.**  
2. **Do not transmit user data.**  
3. **Make all behavior auditable.**

Security is enforced through **architecture**, not promises.  
Users must be able to verify this by inspecting the source and the built artifacts.

---

# 2. Threat Model

The Prodex protects users from:

- Accidental data retention  
- Implicit browser st

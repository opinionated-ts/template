<!--
Fill each section only when it adds meaningful information for reviewing or understanding this PR.

Do not repeat information that is already clear from the diff, commits, or linked references.

If this PR implements an existing issue and that issue already defines the `Why` and/or `What`,
add a `Why/What` section linking that issue and remove the corresponding `Why` and/or `What`
sections. These are the only sections that may be removed when their information is already
provided by the linked issue.

Example:

## Why/What
- #3

All other sections must remain in the template. Use `N/A` when they do not add meaningful information.
-->

## Why

<!--
Explain the problem, motivation, or intended outcome behind this change.

Focus on why the change is necessary, not how it is implemented.

Example:
Why: Requests with expired sessions are currently accepted as authenticated.

Not:
Why: Update the authentication middleware.
-->

N/A

## What

<!--
Describe the logical change this PR introduces.

Focus on the resulting behavior or capability, not implementation steps, files, or
individual code changes.

Example:
What: Reject requests when the supplied session has expired.

Not:
What: Add an expiration check to `SessionMiddleware`.
-->

N/A

## Requirements

<!--
List the conditions that must be true after this PR is merged.

Each item should describe a required behavior, property, or resulting state.
Use checkboxes so each requirement can be verified independently.

Examples:
- [ ] Requests with expired sessions are rejected.
- [ ] Requests with valid sessions continue to authenticate successfully.
- [ ] Rejected requests receive the existing unauthorized response.

Not:
- [ ] Add a session expiration check.
- [ ] Update the session middleware.
- [ ] Add tests for expired sessions.
-->

N/A

## Constraints

<!--
List the conditions that the implementation must preserve or must not violate.

Each item should describe a boundary, invariant, compatibility requirement, or
explicit limitation on the change.

Use checkboxes so each constraint can be verified independently.

Examples:
- [ ] The existing public authentication API remains unchanged.
- [ ] Authentication behavior for non-expired sessions remains unchanged.
- [ ] No new runtime dependency is introduced.
- [ ] Existing authentication response formats remain unchanged.

Not:
- [ ] Expired sessions are rejected.
- [ ] Add a validation function.
- [ ] Add support for session expiration.
-->

N/A

## Related

<!--
Link relevant issues, discussions, pull requests, or documentation.

Group references by what they represent. Add only relevant categories and avoid
duplicating the same reference.

Examples:

Issues:
- #123

Discussions:
- #456

Pull requests:
- #789

Documentation:
- https://...
-->

N/A

## Additional Notes

<!--
Add context that reviewers should know but that does not belong in the sections above.

Use this for:
- Non-obvious decisions
- Important assumptions
- Subtle behavior changes
- Areas that may require particular attention

Do not repeat information already available in the PR, diff, commits, or linked references.
-->

N/A

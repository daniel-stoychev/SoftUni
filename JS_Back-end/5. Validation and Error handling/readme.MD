### Validation & Error handling

## Comments

- validation and error handling must be STABLE

## Validation

- keeps data in good shape
  - Example: user types user only and enteres without providing pass and logs in
- it can: success & allow OR reject
- no matter the data is being validated on client (due to UX (user experience)), it MUST be valided on the server as well
- we can validate on all three models -> controller, service, model
- we can use validator library which is av ailbale for server and client
- sanitization - it changes the input, for example

  - we can canonicalizes the email
  - trim
  - blacklist characters
  - ...

- demo till before model...

- mongoose validations
  - buit-in
  - custom
    - Regex

## Error handling

- we do this when the validation fails
- we always need to hink what the user will see and provide good UX
- we have expected errros and diff types of errors
  - technical/network errors
  - expected errors
  - bug/logical errors (QA, end-to-end testing, integration testing....)
- we deal with errors with try/catch for synchronous and then() - catch() for asynchronous
- error handling MUST be paralel whilke writting the code/features

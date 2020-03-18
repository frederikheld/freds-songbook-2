# State Management

* The whole app state is being kept in Vuex at runtime

* When editing a sheet, the changes are being stored in the view until the user explicitly hits 'save'.

    If the user hits 'save', the view's state is being copied to Vuex.
    
    If the user discards the changes, the sheet is loaded from Vuex again.
    
    Keeping the state in the view allows toggling between editor and viewer to preview changes before saving them.

* Depending on the app mode, the state is being kept in sync with

    * the local storage in the free version
    * Firestore in the paid version
    
    to persist state if the app is being closed.
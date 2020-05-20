√ See a table of the transactions. 

√ - fetch and render table
√ - pass states down to wherever that is displaying

√ and Fill out and submit the form to add a new transaction + persist
√ - add onSubmit and onChange to form 
√ - fetch Post, .then re-render by [spreading the data array state, newItem.] and resetting any states.  


√ Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.
√ - filter via search bar need to have an onChange and state search: '' value = state search 
    √- do usual set state to target search: e.target.value
    √- will need to do some if logic return true a .toLowercase().includes(  state search .toLowercase())
        √- in render make variable to hold a copy of the search (and i think i also replace main array with that variable when passing down for iteration// possibly only if it's going straight to iteration i'll have to check)

-App // just passes into account 
    - AccountContainer - may put state here since there's a lot of children off it
        --  Search
        --  AddTransactionForm - submit form i assume
        --  TransactionList - functional just used to render the transactions, uses props.
            -- Transaction

// now real reason to fetch or anything in app / but in case that doesn't work u can put it back

states for transactions: []
search: ''
i'll need a state for each thing to update on the form:
date: ''
description: '',
category: '', 
amount: 0



if it doesn't work right/ u need to do transactions={...etc}

advanced: 
√ Sort transactions alphabetically by category or description.
√ Delete a transaction which will remove it from the table and delete it from the backend.
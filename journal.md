Instead of putting all the store details into a single storeInfo object, you could have saved each detail in its own standalone global variable. What are the advantages of grouping related data into an object versus managing separate variables?

Grouping related data into an object improves code readability and simplifies function arguments. Instead of passing multiple individual variables into a function, which leads to long cumbersome argument lists, you can pass a single object. Also, it makes the code self-documenting for other developers by clearly showing which values belong together.

                            ~~~~


What happens if you set a value to a property of an object that didn’t exist before? How does that effect the ways that you can create and set object properties?

If you assign a value to a non-existent property on an object, JavaScript automatically creates that property and assigns the value to it. This means you can initialize an empty object and add properties dynamically whenever needed.

1.  Explain the differences between `client-side routing` and `server-side routing`.

server side routing is when we visit a webpage, and the website requests data from a server. The Server returns data like a HTML file or document to the browser so the browser can render the page. Each time we jump to a new URL a fresh page is loaded on the server then sent to the browser, then the browser refreshes in order to render the new page.

Client-side routing differs in that the data is managed by the browser/application within it's own memory. As a result, the browser now has what is required in memory to render different pages. When additional data is required/requested, that is not being held in memory, an API request is made and simple json is returned rather than the entire page. The Browser no longer needs to refresh between routes because the server is no longer compiling the page for the browser.

2.  What does HTTP stand for?

    HTTP stands for Hypertext Transfer Protocol. This is the root of communication over the web.

3.  What does CRUD stand for?

    CRUD, is an acronym in programming that stands for Create, Read, Update, and Delete

4)  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

    'Post' - C (create)
    'Get' - R (Read)
    'Put' - U (update)
    'Delete' - D (Delete)

5.  Mention three tools we can use to make AJAX requests

    Axios, Fetch, JQuery.

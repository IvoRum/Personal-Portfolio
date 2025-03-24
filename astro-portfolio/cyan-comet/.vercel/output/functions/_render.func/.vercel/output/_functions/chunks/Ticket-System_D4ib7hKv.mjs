const id = "Ticket-System.md";
						const collection = "projects";
						const slug = "ticket-system";
						const body = "\r\nTicket Flow is my implementation of the waiting-in-line problem. It was developed as my bachelor's thesis. In essence, the system is a way for any business to organize their line problems. The application is applicable for various businesses and will work for many unusual scenarios.\r\n\r\n![Example 1](../../../public/projects/ticketflow/ex1.png)\r\n\r\nHer you can see a plain example of how the system is meant to be used. The example shows how a\r\nadministrative unit uses the system to simplify the line and waiting time.\r\n\r\n![Example 2](../../../public/projects/ticketflow/ex2.png)\r\n\r\nExample 2 shows the system in a more unseal manner ware the user picks a move that they what to watch and is directed to the right auditorium.\r\n\r\n![Flow 1](../../../public/projects/ticketflow/flow1.png)\r\n\r\nIn this flow diagram is shown how a typical user experience is conducted.\r\n\r\n![Flow 2](../../../public/projects/ticketflow/flow2.png)\r\n\r\nThe second flow shows how the system is used by the Administrator and the process of creating a new type of ticket.\r\n\r\n![Implementation](../../../public/projects/ticketflow/impl.png)\r\n\r\nIn the diagram is shown how the system is implemented as a many-to-many node system of inner connected favors and ticket types. And how the system knows witch person is next in line when you have many counted byt all of them are doing different tickets but some of them game tickets in common. This is very hard to get your head around. But in many administrative structures one counter may on 3 different favors and the counter next to it will work only 2 of the 3 favors. So as a wrap the system supports many favors all being done by a mix of counters.\r\n\r\n# Links\r\n\r\n[Ticket Flow Repo](https://github.com/IvoRum/TicketSystem)\r\n";
						const data = {title:"Ticket Flow",description:"A line management service implemented with virtual tickets ",pubDate:new Date(1686258000000),heroImage:"/projects/banner/ticketflow.png"};
						const _internal = {
							type: 'content',
							filePath: "C:/tomcats/Personal-Portfolio/astro-portfolio/cyan-comet/src/content/projects/Ticket-System.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };

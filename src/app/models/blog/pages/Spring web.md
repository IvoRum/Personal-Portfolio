# Rest
Annotations 
```
@RestController  
@RequestMapping("/api")  
@RequiredArgsConstructor  
@Slf4j
```
Method annotations 
```
@Operation(  
        summary = "Executes a test query against the ERST ES API",  
        description = "Just a test method that extracts companies changed since certain date."  
)  
@ApiResponses(  
        value = {  
                @ApiResponse(  
                        responseCode = "200",  
                        description = "Returns the result of the call",  
                        content = {  
                                @Content(mediaType = MediaType.APPLICATION_JSON_VALUE)  
                        }  
                )  
        }  
)  
@GetMapping(value = "/test/company/update/{date}", produces = MediaType.APPLICATION_JSON_VALUE)
```
Method params
```
public List<VrVirksomhed> processChangedCompanies(@PathVariable ("date") final Date date) {
```

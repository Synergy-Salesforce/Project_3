/**
 * ImageController.cls
 * Author(s): Dorian Alexander Patterson
 *
 * Returns a response with all images related to a property that are not floor plan images.
 */
public with sharing class ImageController {
    @AuraEnabled(cacheable=true)
    public static List<Image> getImagesNotFloorPlan(String recordId){
        try {
            return [
                SELECT URL
                FROM Image
                WHERE Property__c = :recordId AND
                Image_Type__c != 'Floor Plan'
            ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
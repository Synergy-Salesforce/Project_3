public with sharing class vehicleController {
    
    @AuraEnabled(Cacheable=true)
    public static List<House_Member__c> getVehicle(String userId){
        List<User> userRecord = [SELECT Contact.Id FROM User WHERE Id= '0058b00000GdD7OAAV' LIMIT 1];
        String contactId;
        
        for (User us : userRecord) {
            contactId = us.Contact.Id;
        }

        return [
            SELECT
              Id,
              Name,
              Make__c,
              Car_Type__c,
              Model__c,
              License_Plate__c,
              Color__c,
              Insured__c,
              Added_Description_Additional_Details__c
            FROM House_Member__c
            WHERE Contact__c =:contactId AND RecordType.Name IN ('Cars')
          ];
    }

    @AuraEnabled(Cacheable=true)
    public static String getContactId(String userId){
      List<User> userRecord = [SELECT ContactId FROM User WHERE Id= '0058b00000GdD7OAAV' LIMIT 1];
      String contactIdPassing;
        
      for (User us : userRecord) {
        contactIdPassing = us.ContactId;
      }
      return contactIdPassing;
    }
}
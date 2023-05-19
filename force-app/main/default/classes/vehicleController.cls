public without sharing class vehicleController {
    
    @AuraEnabled(Cacheable=true)
    public static List<House_Member__c> getVehicle(String recordId){
     

        return [
            SELECT
              Id,
              Name,
              Make__c,
              Car_Type__c,
              Model__c,
              Color__c,
              Insured__c
            FROM House_Member__c
            WHERE Contact__c = :recordId AND RecordTypeId = '0128b000000dO04AAE'
          ];
    }

    @AuraEnabled(Cacheable=true)
    public static String getContactId(String userId){
      List<User> userRecord = [SELECT Contact.Id FROM User WHERE Id=: userId LIMIT 1];
      String contactIdPassing;
        
      for (User us : userRecord) {
        contactIdPassing = us.Contact.Id;
      }
      return contactIdPassing;
    }
}
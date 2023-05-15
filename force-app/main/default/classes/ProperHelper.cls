public without sharing class ProperHelper {
    List<Property__c> propList;
    public ProperHelper() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Property__c> getProps(){

        return [SELECT Name, City__c,State__c,  Has_Available_Units__c FROM Property__c];
    }
    @AuraEnabled(cacheable=true)
    public static List<Property__c> getPropswithMainImg(){

        return [SELECT Id,Street_Address__c,City__c,State__c,ZipCode__c, Name, Number_Available_Units__c,Description__c,(SELECT URL From Images__r WHERE Image_Type__c = 'Main') FROM Property__c];
    }
    @AuraEnabled(cacheable=true)
    public static List<Property__c> getPropsAvailable(){

        return [SELECT Name, City__c,State__c,Number_Available_Units__c, (SELECT URL From Images__r WHERE Image_Type__c = 'Main')FROM Property__c WHERE Has_Available_Units__c=TRUE];
    }

    @AuraEnabled(cacheable=true)
    public static List<Property__c> getPropertyWithImagesNoFloorPlans(String recordId){
        return [
            SELECT Id,
            (
                SELECT Url
                FROM Images__r
                WHERE Image_Type__c != 'Floor Plan' AND
                Property__c = :recordId
            )
            FROM Property__c WHERE Id = :recordId
        ];
    }
    @AuraEnabled(Cacheable=true)
    public static list<Contact> getHouseHoldMembers(String recordId) {
      return [
        SELECT
          Id,
          Name,
          Property__r.Name,
          Unit__r.Name
        FROM Contact
        WHERE Id = :recordId 
      ];
    }

    @AuraEnabled(Cacheable=true)
    public static list<House_Member__c> getHouseHoldMembersList(String recordId) {
      return [
        SELECT
          Id,
          Name,
          Human_Type__c,
          Relation__c,
          Contact__c
        FROM House_Member__c
        WHERE Contact__c =:recordId AND RecordType.Name IN ('People')
      ];
    }

    @AuraEnabled(Cacheable=true)
    public static String getConId(String userId){
      List<User> conidlist =  [SELECT ContactId FROM User WHERE Id=:userId LIMIT 1];
      String returnid;
      for(User conid: conidlist){
       returnid = conid.ContactId;
      }
      return returnid;
    }

}
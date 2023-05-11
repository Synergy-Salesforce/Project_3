public with sharing class ProperHelper {
    List<Property__c> propList;
    public ProperHelper() {

    }
    
    @AuraEnabled(cacheable=true)
    public static List<Property__c> getProps(){

        return [SELECT Name, City__c,State__c,	Has_Available_Units__c FROM Property__c];
    }
    @AuraEnabled(cacheable=true)
    public static List<Property__c> getPropswithMainImg(){

        return [SELECT Id,Street_Address__c,City__c,State__c,ZipCode__c, Name, Number_Available_Units__c,Description__c,(SELECT URL From Images__r WHERE Image_Type__c = 'Main') FROM Property__c];
    }
    @AuraEnabled(cacheable=true)
    public static List<Property__c> getPropsAvailable(){

        return [SELECT Name, City__c,State__c, (SELECT URL From Images__r WHERE Image_Type__c = 'Main')FROM Property__c WHERE Has_Available_Units__c=TRUE];
    }

}
public with sharing class HouseMembers {
    public HouseMembers() {
    }

    @AuraEnabled(Cacheable=true)
    public static List<House_Member__c> getListHouse(){
       return [SELECT Name, Number_of_Pets__c, Pet_Breeds__c, Size__c, Relation__c FROM House_Member__c WHERE RecordTypeId = '0128b000000dNzuAAE'];
    }
}
public with sharing class HouseMembers {
    public HouseMembers() {
    }

    @AuraEnabled(Cacheable=true)
    public static List<House_Member__c> getListHouse(String recordId){
       return [SELECT Name, Number_of_Pets__c, Pet_Breeds__c, Size__c, Relation__c,Breed__c
       FROM House_Member__c WHERE Contact__c =: recordId AND RecordTypeId = '0128b000000dNzuAAE'];
    }
}
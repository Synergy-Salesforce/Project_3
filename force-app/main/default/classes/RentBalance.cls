public without sharing class RentBalance {
  @AuraEnabled(cacheable=true)
  public static List<SObject> getRent(Id userId) {
    List<User> user = [SELECT Contact.Id FROM User WHERE Id = :userId];
    
    String contId = user[0].Contact.Id;

    return [
      SELECT Unit__r.Rent__c
      FROM Contact
      WHERE Id = :contId
    ];
  }
}
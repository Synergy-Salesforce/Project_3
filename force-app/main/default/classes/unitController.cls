public with sharing class unitController {
  @AuraEnabled(Cacheable=true)
  public static list<unit__c> getUnitList(String recordId) {
    return [
      SELECT
        Id,
        Property__c,
        Name,
        Bedrooms__c,
        Baths__c,
        Rent__c,
        Size_Sq_Ft__c,
        Available__c,
        (SELECT Url FROM Images__R WHERE Image_Type__c = 'Floor Plan')
      FROM Unit__c
      WHERE Property__c =: recordId AND Available__c = TRUE
    ];
  }
}


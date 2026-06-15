# KBV_PR_MIO_LAB_ServiceRequest - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **KBV_PR_MIO_LAB_ServiceRequest**

## Resource Profile: KBV_PR_MIO_LAB_ServiceRequest 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_ServiceRequest | *Version*:1.0.0-update |
| Draft as of 2026-06-11 | *Computable Name*:KBV_PR_MIO_LAB_ServiceRequest |
| **Copyright/Legal**: Im folgenden Profil können Codes aus den Code-Systemen SNOMED CT®, LOINC, Ucum, ATC, ICD-10-GM, ICD-10-WHO, OPS, Alpha-ID/Alpha-ID-SE und ICF enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED CT® Clinical Terms® (SNOMED CT® CT®) which is used by permission of SNOMED CT® International. All rights reserved. SNOMED CT® CT®, was originally created by The College of American Pathologists. SNOMED CT® and SNOMED CT® CT are registered trademarks of SNOMED CT® International. Implementers of these artefacts must have the appropriate SNOMED CT® CT Affiliate license. This material contains content from LOINC (http://LOINC.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://LOINC.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED ‘AS IS.’ ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. Dieses Material enthält Inhalte aus ATC. Die Erstellung erfolgte unter Verwendung der Datenträger der amtlichen Fassung der ATC-Klassifikation mit DDD des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICD-10-GM, ICD-10-WHO, OPS Alpha-ID ans Alpha-ID-SE. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICF. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Deutschen Instituts für Medizinische Dokumentation und Information (DIMDI). ICF-Kodes, -Begriffe und -Texte © Weltgesundheitsorganisation, übersetzt und herausgegeben durch das Deutsche Institut für Medizinische Dokumentation und Information von der International classification of functioning, disability and health - ICF, herausgegeben durch die Weltgesundheitsorganisation. | |

 
Administrative und für die Befundung klinisch relevante Teilinformationen aus dem Laborauftrag 

**Usages:**

* Use this Profile: [KBV_PR_MIO_LAB_Bundle](StructureDefinition-KBV-PR-MIO-LAB-Bundle.md)
* Refer to this Profile: [KBV_PR_MIO_LAB_Composition](StructureDefinition-KBV-PR-MIO-LAB-Composition.md) and [KBV_PR_MIO_LAB_DiagnosticReport](StructureDefinition-KBV-PR-MIO-LAB-DiagnosticReport.md)
* Examples for this Profile: [ServiceRequest/01a21c9c-2cd1-44e5-a999-f84d9ef70605](ServiceRequest-01a21c9c-2cd1-44e5-a999-f84d9ef70605.md) and [ServiceRequest/eb46f1a2-c4ad-4276-aaaa-aef507db618d](ServiceRequest-eb46f1a2-c4ad-4276-aaaa-aef507db618d.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/kbv.mio.laborbefund|current/StructureDefinition/StructureDefinition-KBV-PR-MIO-LAB-ServiceRequest.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-KBV-PR-MIO-LAB-ServiceRequest.csv), [Excel](StructureDefinition-KBV-PR-MIO-LAB-ServiceRequest.xlsx), [Schematron](StructureDefinition-KBV-PR-MIO-LAB-ServiceRequest.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "KBV-PR-MIO-LAB-ServiceRequest",
  "url" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_ServiceRequest",
  "version" : "1.0.0-update",
  "name" : "KBV_PR_MIO_LAB_ServiceRequest",
  "title" : "KBV_PR_MIO_LAB_ServiceRequest",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-06-11",
  "publisher" : "mio42 GmbH",
  "contact" : [{
    "name" : "mio42 GmbH",
    "telecom" : [{
      "system" : "url",
      "value" : "https://mio.kbv.de"
    },
    {
      "system" : "email",
      "value" : "hello@mio42.de"
    }]
  }],
  "description" : "Administrative und für die Befundung klinisch relevante Teilinformationen aus dem Laborauftrag",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "DE",
      "display" : "Germany"
    }]
  }],
  "copyright" : "Im folgenden Profil können Codes aus den Code-Systemen SNOMED CT®, LOINC, Ucum, ATC, ICD-10-GM, ICD-10-WHO, OPS, Alpha-ID/Alpha-ID-SE und ICF enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED CT® Clinical Terms® (SNOMED CT® CT®) which is used by permission of SNOMED CT® International. All rights reserved. SNOMED CT® CT®, was originally created by The College of American Pathologists. SNOMED CT® and SNOMED CT® CT are registered trademarks of SNOMED CT® International. Implementers of these artefacts must have the appropriate SNOMED CT® CT Affiliate license. This material contains content from LOINC (http://LOINC.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://LOINC.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED 'AS IS.' ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. Dieses Material enthält Inhalte aus ATC. Die Erstellung erfolgte unter Verwendung der Datenträger der amtlichen Fassung der ATC-Klassifikation mit DDD des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICD-10-GM, ICD-10-WHO, OPS Alpha-ID ans Alpha-ID-SE. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICF. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Deutschen Instituts für Medizinische Dokumentation und Information (DIMDI). ICF-Kodes, -Begriffe und -Texte © Weltgesundheitsorganisation, übersetzt und herausgegeben durch das Deutsche Institut für Medizinische Dokumentation und Information von der International classification of functioning, disability and health - ICF, herausgegeben durch die Weltgesundheitsorganisation.",
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "workflow",
    "uri" : "http://hl7.org/fhir/workflow",
    "name" : "Workflow Pattern"
  },
  {
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "quick",
    "uri" : "http://siframework.org/cqf",
    "name" : "Quality Improvement and Clinical Knowledge (QUICK)"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "ServiceRequest",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "ServiceRequest",
      "path" : "ServiceRequest",
      "definition" : "Administrative und für die Befundung klinisch relevante Teilinformationen aus dem Laborauftrag."
    },
    {
      "id" : "ServiceRequest.meta",
      "path" : "ServiceRequest.meta",
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.meta.id",
      "path" : "ServiceRequest.meta.id",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.meta.versionId",
      "path" : "ServiceRequest.meta.versionId",
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.meta.lastUpdated",
      "path" : "ServiceRequest.meta.lastUpdated",
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.meta.source",
      "path" : "ServiceRequest.meta.source",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.implicitRules",
      "path" : "ServiceRequest.implicitRules",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.language",
      "path" : "ServiceRequest.language",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.text.status",
      "path" : "ServiceRequest.text.status",
      "patternCode" : "extensions"
    },
    {
      "id" : "ServiceRequest.contained",
      "path" : "ServiceRequest.contained",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.identifier",
      "path" : "ServiceRequest.identifier",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "type"
        }],
        "rules" : "closed"
      },
      "short" : "Auftragsbezogener Identifikator",
      "definition" : "In der Labordatenkommunikation kann sowohl von der einsendenden Einrichtung/Person wie auch vom auftragsnehmenden Labor ein auftragsbezogener Identifikator zugeordnet werden.",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.identifier:orderNumberSender",
      "path" : "ServiceRequest.identifier",
      "sliceName" : "orderNumberSender",
      "short" : "Auftragsnummer, die der auftraggebende Einsender vergibt und führt.",
      "definition" : "Auftragsnummer, die der auftraggebende Einsender vergibt und führt.",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.identifier:orderNumberSender.use",
      "path" : "ServiceRequest.identifier.use",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.identifier:orderNumberSender.type",
      "path" : "ServiceRequest.identifier.type",
      "min" : 1,
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Laboratory_Identificator",
          "version" : "1.0.0-update",
          "code" : "AE",
          "display" : "Auftragsnummer des Einsenders"
        }]
      },
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.identifier:orderNumberSender.type.coding",
      "path" : "ServiceRequest.identifier.type.coding",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.identifier:orderNumberSender.type.coding.system",
      "path" : "ServiceRequest.identifier.type.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.identifier:orderNumberSender.type.coding.version",
      "path" : "ServiceRequest.identifier.type.coding.version",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.identifier:orderNumberSender.type.coding.code",
      "path" : "ServiceRequest.identifier.type.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.identifier:orderNumberSender.type.coding.display",
      "path" : "ServiceRequest.identifier.type.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.identifier:orderNumberSender.type.coding.userSelected",
      "path" : "ServiceRequest.identifier.type.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.identifier:orderNumberSender.type.text",
      "path" : "ServiceRequest.identifier.type.text",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.identifier:orderNumberSender.system",
      "path" : "ServiceRequest.identifier.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.identifier:orderNumberSender.value",
      "path" : "ServiceRequest.identifier.value",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.identifier:orderNumberSender.period",
      "path" : "ServiceRequest.identifier.period",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.identifier:orderNumberSender.assigner",
      "path" : "ServiceRequest.identifier.assigner",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.identifier:additionalRequestIdentification",
      "path" : "ServiceRequest.identifier",
      "sliceName" : "additionalRequestIdentification",
      "short" : "Identifiziert eine Nachforderung mit Bezug auf eine bereits vorhandene Auftragsidentifikation",
      "definition" : "Nachforderungs-ID - Eine Nachforderung ist eine ergänzende Anforderung von Laboruntersuchungen zu einem bereits bestehenden Überweisungsauftrag.",
      "min" : 0,
      "max" : "*",
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.identifier:additionalRequestIdentification.use",
      "path" : "ServiceRequest.identifier.use",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.identifier:additionalRequestIdentification.type",
      "path" : "ServiceRequest.identifier.type",
      "min" : 1,
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Laboratory_Identificator",
          "version" : "1.0.0-update",
          "code" : "NI",
          "display" : "Nachforderungsidentifikation"
        }]
      },
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.identifier:additionalRequestIdentification.type.coding",
      "path" : "ServiceRequest.identifier.type.coding",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.identifier:additionalRequestIdentification.type.coding.system",
      "path" : "ServiceRequest.identifier.type.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.identifier:additionalRequestIdentification.type.coding.version",
      "path" : "ServiceRequest.identifier.type.coding.version",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.identifier:additionalRequestIdentification.type.coding.code",
      "path" : "ServiceRequest.identifier.type.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.identifier:additionalRequestIdentification.type.coding.display",
      "path" : "ServiceRequest.identifier.type.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.identifier:additionalRequestIdentification.type.coding.userSelected",
      "path" : "ServiceRequest.identifier.type.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.identifier:additionalRequestIdentification.type.text",
      "path" : "ServiceRequest.identifier.type.text",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.identifier:additionalRequestIdentification.system",
      "path" : "ServiceRequest.identifier.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.identifier:additionalRequestIdentification.value",
      "path" : "ServiceRequest.identifier.value",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.identifier:additionalRequestIdentification.period",
      "path" : "ServiceRequest.identifier.period",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.identifier:additionalRequestIdentification.assigner",
      "path" : "ServiceRequest.identifier.assigner",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.instantiatesCanonical",
      "path" : "ServiceRequest.instantiatesCanonical",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.instantiatesUri",
      "path" : "ServiceRequest.instantiatesUri",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.basedOn",
      "path" : "ServiceRequest.basedOn",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.replaces",
      "path" : "ServiceRequest.replaces",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.requisition",
      "path" : "ServiceRequest.requisition",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.category",
      "path" : "ServiceRequest.category",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.priority",
      "path" : "ServiceRequest.priority",
      "short" : "Dringlichkeit des Laborauftrags",
      "definition" : "Die im Laborauftrag formulierte Dringlichkeit von Laboruntersuchungen soll im Laborbefund berücksichtigt werden. Mögliche Werte sind:\n\n* Routine (routine)\n* Dringend (urgent): der Auftrag sollte umgehend bearbeitet werden, höhere Priorität als Routine\n* Baldmöglichst (asap): der Auftrag sollte so schnell wie möglich bearbeitet werden, höhere Priorität als dringend\n* Sofort/Notfall (stat): der Auftrag sollte sofort mit höchstmöglicher Priorität bearbeitet werden, Notfall-Labor",
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.doNotPerform",
      "path" : "ServiceRequest.doNotPerform",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.code",
      "path" : "ServiceRequest.code",
      "definition" : "Vorgegebener Code für die Laborauftrag-Information",
      "min" : 1,
      "patternCodeableConcept" : {
        "coding" : [{
          "system" : "http://snomed.info/sct",
          "version" : "http://snomed.info/sct/11000274103/version/20251115",
          "code" : "721965002",
          "display" : "Laboratory order (record artifact)"
        }]
      },
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.code.coding",
      "path" : "ServiceRequest.code.coding",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.code.coding.system",
      "path" : "ServiceRequest.code.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.code.coding.version",
      "path" : "ServiceRequest.code.coding.version",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.code.coding.code",
      "path" : "ServiceRequest.code.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.code.coding.display",
      "path" : "ServiceRequest.code.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.code.coding.userSelected",
      "path" : "ServiceRequest.code.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.orderDetail",
      "path" : "ServiceRequest.orderDetail",
      "short" : "Freitext Anforderung aus dem Laborauftrag",
      "definition" : "Als Freitext formulierte Anforderung aus dem Laborauftrag. Das kann beispielsweise aus Muster 10 übernommen sein oder über den Labordatentransfer (LDT) übermittelt worden sein.",
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.orderDetail.coding",
      "path" : "ServiceRequest.orderDetail.coding",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.orderDetail.text",
      "path" : "ServiceRequest.orderDetail.text",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.quantity[x]",
      "path" : "ServiceRequest.quantity[x]",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.subject",
      "path" : "ServiceRequest.subject",
      "short" : "Zu behandelnde Person",
      "definition" : "Hier wird die zu behandelnde Person referenziert.",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Patient|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.subject.identifier",
      "path" : "ServiceRequest.subject.identifier",
      "min" : 1,
      "type" : [{
        "code" : "Identifier",
        "profile" : ["http://fhir.de/StructureDefinition/identifier-kvid-10"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.encounter",
      "path" : "ServiceRequest.encounter",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.occurrence[x]",
      "path" : "ServiceRequest.occurrence[x]",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.asNeeded[x]",
      "path" : "ServiceRequest.asNeeded[x]",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.authoredOn",
      "path" : "ServiceRequest.authoredOn",
      "short" : "Auftragszeitpunkt",
      "definition" : "Zeitpunkt, zu dem der Einsender den Auftrag erstellt hat.",
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.requester",
      "path" : "ServiceRequest.requester",
      "short" : "Einsender:in, Auftraggeber:in",
      "definition" : "Referenzierung auf die auftraggebende bzw. einsendende Person/Einrichtung. Diese kann sein:\n\n* Behandelnde/r Arzt/Ärztin als Person oder Einrichtung\n* Therapeut:in als Person oder Einrichtung\n* Behandelnde Person/Einrichtung-Kombination\n* Patient:in selbst\n* Kontaktperson",
      "min" : 1,
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Patient|1.0.0-update",
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_RelatedPerson|1.0.0-update",
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Practitioner|1.0.0-update",
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_PractitionerRole|1.0.0-update",
        "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Organization|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.requester.reference",
      "path" : "ServiceRequest.requester.reference",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.requester.type",
      "path" : "ServiceRequest.requester.type",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.requester.identifier",
      "path" : "ServiceRequest.requester.identifier",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.requester.display",
      "path" : "ServiceRequest.requester.display",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.performerType",
      "path" : "ServiceRequest.performerType",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.performer",
      "path" : "ServiceRequest.performer",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.locationCode",
      "path" : "ServiceRequest.locationCode",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.locationReference",
      "path" : "ServiceRequest.locationReference",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.reasonCode",
      "path" : "ServiceRequest.reasonCode",
      "short" : "Prozessualer Anlass oder medizinischer Veranlassungsgrund der Labordiagnostik",
      "definition" : "Der Anlass der Labordiagnostik wird als prozessuale Fragestellung formuliert. Diese Angabe dient der Fokussierung der Beurteilung. Beispiele für Inhalte aus dem LDT, die in dieses Freitextfeld hineinpassen könnten, sind: Ausschluss; Verlaufskontrolle; Vorsorge.\n\n\nDer Veranlassungsgrund der Labordiagnostik wird als medizinische Fragestellung formuliert. Diese Angabe dient der fachlichen Präzision der Beurteilung. Beispiele für Inhalte aus dem LDT, die in dieses Freitextfeld hineinpassen könnten, sind: Eingriff; Infektion; Rheuma; Tumor.\n\n\nZusätzlich zur Freitextangabe einer LDT-Information ist in FHIR® auch die Codierung möglich.",
      "max" : "2",
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.reasonCode.extension",
      "path" : "ServiceRequest.reasonCode.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "description" : "Extensions are always sliced by (at least) url",
        "rules" : "closed"
      },
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.reasonCode.extension:reasonType",
      "path" : "ServiceRequest.reasonCode.extension",
      "sliceName" : "reasonType",
      "definition" : "Hier wird unterschieden, ob es sich bei der Angabe um einen Anlass und Veranlassungsgrund des Laborauftrags handelt.",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Reason_Type"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.reasonCode.extension:reasonType.value[x]",
      "path" : "ServiceRequest.reasonCode.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.reasonCode.text",
      "path" : "ServiceRequest.reasonCode.text",
      "definition" : "Hier wird passend zum angegebenen Begründungsart die ensprechende ergänzende Beschreibung aus LDT3 angegeben.\n\nFür den Anlass sind folgende Angaben möglich:\n\n* 01 = Vorsorge\n* 02 = Verlaufskontrolle\n* 03 = Zustand vor\n* 04 = Zustand nach\n* 05 = Ausschluss\n* 06 = Bestätigung\n* 07 = gezielte Suche\n* 08 = ungezielte Suche\n* 09 = Erfolgskontrolle\n* 10 = Abschlusskontrolle\n* 11 = Immunität/Impferfolg\n\n\nFür den Veranlassungsgrund sind folgende Angaben möglich:\n\n* 01 = Eingriff\n* 02 = Medikamentengabe\n* 03 = unklares Fieber\n* 04 = Infektion\n* 05 = Rheuma\n* 06 = Allergie\n* 07 = Herz/Kreislauf\n* 08 = Tumor\n* 09 = Impfungen\n* 10 = Reisen\n* 11 = Immunität nach Infektion\n* 12 = Sonstiges",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.reasonReference",
      "path" : "ServiceRequest.reasonReference",
      "short" : "Auftragsdiagnose",
      "definition" : "Hier besteht die Option, die Diagnose aus dem Laborauftrag mitzuführen. Die Übernahme eines Diagnose-Codes geschieht in Abhängigkeit von den Auftragsdaten. Das setzt voraus, dass die Diagnose in den Auftragsdaten codiert übergeben worden ist.",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Condition_Diagnosis|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.reasonReference.reference",
      "path" : "ServiceRequest.reasonReference.reference",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.reasonReference.type",
      "path" : "ServiceRequest.reasonReference.type",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.reasonReference.identifier",
      "path" : "ServiceRequest.reasonReference.identifier",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.reasonReference.display",
      "path" : "ServiceRequest.reasonReference.display",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.insurance",
      "path" : "ServiceRequest.insurance",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.supportingInfo",
      "path" : "ServiceRequest.supportingInfo",
      "short" : "Klinische Angaben aus dem Laborauftrag",
      "definition" : "Klinische Angaben aus dem Laborauftrag, die für die Befundung wichtig sind, können hier als Freitext berücksichtigt werden. Das sind beispielsweise Angaben zur Medikation oder zur gesundheitlichen Konstitution.",
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.supportingInfo.reference",
      "path" : "ServiceRequest.supportingInfo.reference",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.supportingInfo.type",
      "path" : "ServiceRequest.supportingInfo.type",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.supportingInfo.identifier",
      "path" : "ServiceRequest.supportingInfo.identifier",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.supportingInfo.display",
      "path" : "ServiceRequest.supportingInfo.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.specimen",
      "path" : "ServiceRequest.specimen",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.bodySite",
      "path" : "ServiceRequest.bodySite",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.note",
      "path" : "ServiceRequest.note",
      "short" : "Auftragsbezogene Hinweise",
      "definition" : "Ergänzende Angaben zum Auftrag, z. B. Institutionsspezifische administrative Zuordnung (\"Tour-Nummer\"; \"Tagebuch-Nummer\"). Der Inhalt dieses Elementes kann den Angaben zu \"Auftragsbezogene Hinweise\" aus der LDT-Kommunikation entsprechen.",
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.note.author[x]",
      "path" : "ServiceRequest.note.author[x]",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.note.time",
      "path" : "ServiceRequest.note.time",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.note.text",
      "path" : "ServiceRequest.note.text",
      "mustSupport" : true
    },
    {
      "id" : "ServiceRequest.patientInstruction",
      "path" : "ServiceRequest.patientInstruction",
      "max" : "0"
    },
    {
      "id" : "ServiceRequest.relevantHistory",
      "path" : "ServiceRequest.relevantHistory",
      "max" : "0"
    }]
  }
}

```

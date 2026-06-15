# KBV_PR_MIO_LAB_Device_Specimen_Container - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **KBV_PR_MIO_LAB_Device_Specimen_Container**

## Resource Profile: KBV_PR_MIO_LAB_Device_Specimen_Container 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Device_Specimen_Container | *Version*:1.0.0-update |
| Draft as of 2026-06-11 | *Computable Name*:KBV_PR_MIO_LAB_Device_Specimen_Container |
| **Copyright/Legal**: Im folgenden Profil können Codes aus den Code-Systemen SNOMED CT®, LOINC, Ucum, ATC, ICD-10-GM, ICD-10-WHO, OPS, Alpha-ID/Alpha-ID-SE und ICF enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED CT® Clinical Terms® (SNOMED CT® CT®) which is used by permission of SNOMED CT® International. All rights reserved. SNOMED CT® CT®, was originally created by The College of American Pathologists. SNOMED CT® and SNOMED CT® CT are registered trademarks of SNOMED CT® International. Implementers of these artefacts must have the appropriate SNOMED CT® CT Affiliate license. This material contains content from LOINC (http://LOINC.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://LOINC.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED ‘AS IS.’ ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. Dieses Material enthält Inhalte aus ATC. Die Erstellung erfolgte unter Verwendung der Datenträger der amtlichen Fassung der ATC-Klassifikation mit DDD des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICD-10-GM, ICD-10-WHO, OPS Alpha-ID ans Alpha-ID-SE. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICF. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Deutschen Instituts für Medizinische Dokumentation und Information (DIMDI). ICF-Kodes, -Begriffe und -Texte © Weltgesundheitsorganisation, übersetzt und herausgegeben durch das Deutsche Institut für Medizinische Dokumentation und Information von der International classification of functioning, disability and health - ICF, herausgegeben durch die Weltgesundheitsorganisation. | |

 
In diesem Profil werden Informationen zum Probenbehälter angegeben, z. B. Blutröhrchen, steriler Urinprobenbehälter. 

**Usages:**

* Use this Profile: [KBV_PR_MIO_LAB_Bundle](StructureDefinition-KBV-PR-MIO-LAB-Bundle.md)
* Refer to this Profile: [KBV_PR_MIO_LAB_Specimen](StructureDefinition-KBV-PR-MIO-LAB-Specimen.md)
* Examples for this Profile: [Device/05146497-2ca3-488e-96cb-c27c77ab6a3c](Device-05146497-2ca3-488e-96cb-c27c77ab6a3c.md) and [Device/1ba291b4-78b5-4bf9-92f7-50f2f3c94cf5](Device-1ba291b4-78b5-4bf9-92f7-50f2f3c94cf5.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/kbv.mio.laborbefund|current/StructureDefinition/StructureDefinition-KBV-PR-MIO-LAB-Device-Specimen-Container.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-KBV-PR-MIO-LAB-Device-Specimen-Container.csv), [Excel](StructureDefinition-KBV-PR-MIO-LAB-Device-Specimen-Container.xlsx), [Schematron](StructureDefinition-KBV-PR-MIO-LAB-Device-Specimen-Container.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "KBV-PR-MIO-LAB-Device-Specimen-Container",
  "url" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Device_Specimen_Container",
  "version" : "1.0.0-update",
  "name" : "KBV_PR_MIO_LAB_Device_Specimen_Container",
  "title" : "KBV_PR_MIO_LAB_Device_Specimen_Container",
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
  "description" : "In diesem Profil werden Informationen zum Probenbehälter angegeben, z. B. Blutröhrchen, steriler Urinprobenbehälter.",
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
    "identity" : "udi",
    "uri" : "http://fda.gov/UDI",
    "name" : "UDI Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Device",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Device",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Device",
      "path" : "Device",
      "definition" : "In diesem Profil werden Informationen zum Probenbehälter angegeben, z. B. Blutröhrchen, steriler Urinprobenbehälter."
    },
    {
      "id" : "Device.meta",
      "path" : "Device.meta",
      "mustSupport" : true
    },
    {
      "id" : "Device.meta.id",
      "path" : "Device.meta.id",
      "max" : "0"
    },
    {
      "id" : "Device.meta.versionId",
      "path" : "Device.meta.versionId",
      "mustSupport" : true
    },
    {
      "id" : "Device.meta.lastUpdated",
      "path" : "Device.meta.lastUpdated",
      "mustSupport" : true
    },
    {
      "id" : "Device.meta.source",
      "path" : "Device.meta.source",
      "max" : "0"
    },
    {
      "id" : "Device.implicitRules",
      "path" : "Device.implicitRules",
      "max" : "0"
    },
    {
      "id" : "Device.language",
      "path" : "Device.language",
      "max" : "0"
    },
    {
      "id" : "Device.text.status",
      "path" : "Device.text.status",
      "patternCode" : "extensions"
    },
    {
      "id" : "Device.contained",
      "path" : "Device.contained",
      "max" : "0"
    },
    {
      "id" : "Device.identifier",
      "path" : "Device.identifier",
      "short" : "Identifikator des Probenbehälters",
      "definition" : "Identifikator des Probenbehälters. Hier werden eineindeutige Produktnummern angegeben. Diese stellen einen eineindeutigen (Bijektiven) Identifier dar.\n\n  Es kann mehrere geben, z.B. einen Strichcode des Herstellers, eine vom Labor zugewiesene Kennung usw. Der Behälter-Identifikator kann sich ggf. vom Proben-Identifikator unterscheiden. Auch Teilmengen des Untersuchungsmaterials müssen eindeutig einem/r Patient:in zuzuordnen sein.\n\n  Der Sachverhalt, dass es zu einem Untersuchungsmaterial Teilmengen geben kann, wird im Datenmodell berücksichtigt, indem es sowohl die \"Identifikation Probe Einsender\" (Specimen.identifier 1..*) gibt, als auch für mögliche Teilmengen daraus die \"Probenbehälter-ID\" (Device_Specimen_Container.identifier 0..*).",
      "mustSupport" : true
    },
    {
      "id" : "Device.identifier.type",
      "path" : "Device.identifier.type",
      "mustSupport" : true
    },
    {
      "id" : "Device.identifier.value",
      "path" : "Device.identifier.value",
      "mustSupport" : true
    },
    {
      "id" : "Device.identifier.period",
      "path" : "Device.identifier.period",
      "max" : "0"
    },
    {
      "id" : "Device.identifier.assigner",
      "path" : "Device.identifier.assigner",
      "max" : "0"
    },
    {
      "id" : "Device.definition",
      "path" : "Device.definition",
      "definition" : "In diesem Element wird die DeviceDefinition für die Kategorisierung als Probenbehälters referenziert.",
      "min" : 1,
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DeviceDefinition_Specimen_Container|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Device.definition.reference",
      "path" : "Device.definition.reference",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Device.definition.type",
      "path" : "Device.definition.type",
      "max" : "0"
    },
    {
      "id" : "Device.definition.identifier",
      "path" : "Device.definition.identifier",
      "max" : "0"
    },
    {
      "id" : "Device.definition.display",
      "path" : "Device.definition.display",
      "max" : "0"
    },
    {
      "id" : "Device.udiCarrier",
      "path" : "Device.udiCarrier",
      "definition" : "UDI-DI ist der \"Device Identifier\". Es ist der statische Teil der UDI. Er enthält die Kennung der gewählten Zuteilungsstelle, die Kennung des Herstellers / Etikettierers, den Referenzcode des Produkts und kann auch eine Kennzeichnung für eine bestimmte Verpackungsebene enthalten.",
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Device.udiCarrier.deviceIdentifier",
      "path" : "Device.udiCarrier.deviceIdentifier",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Device.udiCarrier.issuer",
      "path" : "Device.udiCarrier.issuer",
      "max" : "0"
    },
    {
      "id" : "Device.udiCarrier.jurisdiction",
      "path" : "Device.udiCarrier.jurisdiction",
      "max" : "0"
    },
    {
      "id" : "Device.udiCarrier.carrierAIDC",
      "path" : "Device.udiCarrier.carrierAIDC",
      "max" : "0"
    },
    {
      "id" : "Device.udiCarrier.carrierHRF",
      "path" : "Device.udiCarrier.carrierHRF",
      "max" : "0"
    },
    {
      "id" : "Device.udiCarrier.entryType",
      "path" : "Device.udiCarrier.entryType",
      "max" : "0"
    },
    {
      "id" : "Device.status",
      "path" : "Device.status",
      "max" : "0"
    },
    {
      "id" : "Device.statusReason",
      "path" : "Device.statusReason",
      "max" : "0"
    },
    {
      "id" : "Device.distinctIdentifier",
      "path" : "Device.distinctIdentifier",
      "definition" : "Teil der UDI-PI",
      "mustSupport" : true
    },
    {
      "id" : "Device.manufacturer",
      "path" : "Device.manufacturer",
      "max" : "0"
    },
    {
      "id" : "Device.manufactureDate",
      "path" : "Device.manufactureDate",
      "definition" : "Herstellungsdatum des Produktes",
      "mustSupport" : true
    },
    {
      "id" : "Device.expirationDate",
      "path" : "Device.expirationDate",
      "definition" : "Verfallsdatum  des Produktes",
      "mustSupport" : true
    },
    {
      "id" : "Device.lotNumber",
      "path" : "Device.lotNumber",
      "definition" : "Chargennummer des Produktes",
      "mustSupport" : true
    },
    {
      "id" : "Device.serialNumber",
      "path" : "Device.serialNumber",
      "definition" : "Seriennummer des Produktes",
      "mustSupport" : true
    },
    {
      "id" : "Device.deviceName",
      "path" : "Device.deviceName",
      "max" : "0"
    },
    {
      "id" : "Device.modelNumber",
      "path" : "Device.modelNumber",
      "definition" : "Modellnummer des Produktes",
      "mustSupport" : true
    },
    {
      "id" : "Device.partNumber",
      "path" : "Device.partNumber",
      "max" : "0"
    },
    {
      "id" : "Device.type",
      "path" : "Device.type",
      "definition" : "Spezifischer Typ des Probenbehälters als Code oder als Freitexteintrag.",
      "mustSupport" : true
    },
    {
      "id" : "Device.type.coding",
      "path" : "Device.type.coding",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "$this"
        }],
        "rules" : "open"
      },
      "definition" : "Hier kann der spezifische Probenbehälter-Typ in Form eines Codes angegeben werden.",
      "mustSupport" : true
    },
    {
      "id" : "Device.type.coding.system",
      "path" : "Device.type.coding.system",
      "min" : 1
    },
    {
      "id" : "Device.type.coding.code",
      "path" : "Device.type.coding.code",
      "min" : 1
    },
    {
      "id" : "Device.type.coding.display",
      "path" : "Device.type.coding.display",
      "min" : 1
    },
    {
      "id" : "Device.type.coding:snomed",
      "path" : "Device.type.coding",
      "sliceName" : "snomed",
      "definition" : "Hier wird ein Code aus SNOMED CT® angegeben.",
      "min" : 0,
      "max" : "1",
      "patternCoding" : {
        "system" : "http://snomed.info/sct"
      },
      "mustSupport" : true,
      "binding" : {
        "strength" : "example",
        "valueSet" : "http://hl7.org/fhir/ValueSet/specimen-container-type"
      }
    },
    {
      "id" : "Device.type.coding:snomed.system",
      "path" : "Device.type.coding.system",
      "mustSupport" : true
    },
    {
      "id" : "Device.type.coding:snomed.version",
      "path" : "Device.type.coding.version",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Device.type.coding:snomed.code",
      "path" : "Device.type.coding.code",
      "mustSupport" : true
    },
    {
      "id" : "Device.type.coding:snomed.display",
      "path" : "Device.type.coding.display",
      "mustSupport" : true
    },
    {
      "id" : "Device.type.coding:snomed.userSelected",
      "path" : "Device.type.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "Device.type.text",
      "path" : "Device.type.text",
      "definition" : "Freitextbezeichnung für den spezifischen Typ des Probenbehälters.",
      "mustSupport" : true
    },
    {
      "id" : "Device.specialization",
      "path" : "Device.specialization",
      "max" : "0"
    },
    {
      "id" : "Device.version",
      "path" : "Device.version",
      "max" : "0"
    },
    {
      "id" : "Device.property",
      "path" : "Device.property",
      "max" : "0"
    },
    {
      "id" : "Device.patient",
      "path" : "Device.patient",
      "max" : "0"
    },
    {
      "id" : "Device.owner",
      "path" : "Device.owner",
      "max" : "0"
    },
    {
      "id" : "Device.contact",
      "path" : "Device.contact",
      "max" : "0"
    },
    {
      "id" : "Device.location",
      "path" : "Device.location",
      "max" : "0"
    },
    {
      "id" : "Device.url",
      "path" : "Device.url",
      "max" : "0"
    },
    {
      "id" : "Device.note",
      "path" : "Device.note",
      "definition" : "Feld für ergänzende Freitext-Angaben zum Probenbehälter, die in der vorgegebenen Datenstruktur nicht erfasst werden können.",
      "mustSupport" : true
    },
    {
      "id" : "Device.note.author[x]",
      "path" : "Device.note.author[x]",
      "max" : "0"
    },
    {
      "id" : "Device.note.time",
      "path" : "Device.note.time",
      "max" : "0"
    },
    {
      "id" : "Device.note.text",
      "path" : "Device.note.text",
      "mustSupport" : true
    },
    {
      "id" : "Device.safety",
      "path" : "Device.safety",
      "max" : "0"
    },
    {
      "id" : "Device.parent",
      "path" : "Device.parent",
      "max" : "0"
    }]
  }
}

```

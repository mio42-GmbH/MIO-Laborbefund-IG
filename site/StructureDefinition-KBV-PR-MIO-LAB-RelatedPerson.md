# KBV_PR_MIO_LAB_RelatedPerson - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **KBV_PR_MIO_LAB_RelatedPerson**

## Resource Profile: KBV_PR_MIO_LAB_RelatedPerson 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_RelatedPerson | *Version*:1.0.0-update |
| Draft as of 2026-06-11 | *Computable Name*:KBV_PR_MIO_LAB_RelatedPerson |
| **Copyright/Legal**: Im folgenden Profil können Codes aus den Code-Systemen SNOMED CT®, LOINC, Ucum, ATC, ICD-10-GM, ICD-10-WHO, OPS, Alpha-ID/Alpha-ID-SE und ICF enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED CT® Clinical Terms® (SNOMED CT® CT®) which is used by permission of SNOMED CT® International. All rights reserved. SNOMED CT® CT®, was originally created by The College of American Pathologists. SNOMED CT® and SNOMED CT® CT are registered trademarks of SNOMED CT® International. Implementers of these artefacts must have the appropriate SNOMED CT® CT Affiliate license. This material contains content from LOINC (http://LOINC.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://LOINC.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED ‘AS IS.’ ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. Dieses Material enthält Inhalte aus ATC. Die Erstellung erfolgte unter Verwendung der Datenträger der amtlichen Fassung der ATC-Klassifikation mit DDD des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICD-10-GM, ICD-10-WHO, OPS Alpha-ID ans Alpha-ID-SE. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICF. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Deutschen Instituts für Medizinische Dokumentation und Information (DIMDI). ICF-Kodes, -Begriffe und -Texte © Weltgesundheitsorganisation, übersetzt und herausgegeben durch das Deutsche Institut für Medizinische Dokumentation und Information von der International classification of functioning, disability and health - ICF, herausgegeben durch die Weltgesundheitsorganisation. | |

 
Dieses Profil bildet eine Kontakt- oder Bezugsperson ab. 

**Usages:**

* Use this Profile: [KBV_PR_MIO_LAB_Bundle](StructureDefinition-KBV-PR-MIO-LAB-Bundle.md)
* Refer to this Profile: [KBV_PR_MIO_LAB_Composition](StructureDefinition-KBV-PR-MIO-LAB-Composition.md) and [KBV_PR_MIO_LAB_ServiceRequest](StructureDefinition-KBV-PR-MIO-LAB-ServiceRequest.md)
* Examples for this Profile: [RelatedPerson/0f9878cf-8297-43c1-bf2d-7de5da068bf6](RelatedPerson-0f9878cf-8297-43c1-bf2d-7de5da068bf6.md) and [RelatedPerson/778e032a-723a-4f3e-915f-ffbc5488b369](RelatedPerson-778e032a-723a-4f3e-915f-ffbc5488b369.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/kbv.mio.laborbefund|current/StructureDefinition/StructureDefinition-KBV-PR-MIO-LAB-RelatedPerson.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-KBV-PR-MIO-LAB-RelatedPerson.csv), [Excel](StructureDefinition-KBV-PR-MIO-LAB-RelatedPerson.xlsx), [Schematron](StructureDefinition-KBV-PR-MIO-LAB-RelatedPerson.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "KBV-PR-MIO-LAB-RelatedPerson",
  "url" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_RelatedPerson",
  "version" : "1.0.0-update",
  "name" : "KBV_PR_MIO_LAB_RelatedPerson",
  "title" : "KBV_PR_MIO_LAB_RelatedPerson",
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
  "description" : "Dieses Profil bildet eine Kontakt- oder Bezugsperson ab.",
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
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "RelatedPerson",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "RelatedPerson",
      "path" : "RelatedPerson",
      "definition" : "Hier wird eine Kontakt- oder Bezugsperson erfasst, die eine Beziehung zum Patienten / zur Patientin hat. Sie kann an der Versorgung des Patienten / der Patientin beteiligt sein, jedoch nur als Privatperson in ihrer privaten Zeit. Wenn ausgedrückt werden soll, dass sie an der Versorgung beteiligt ist, kann sie im Versorgungsteam aufgeführt werden. Ein Beispiel für Letzteres ist ein(e) pflegende(r) An- oder Zugehörige(r)."
    },
    {
      "id" : "RelatedPerson.meta",
      "path" : "RelatedPerson.meta",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.meta.id",
      "path" : "RelatedPerson.meta.id",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.meta.versionId",
      "path" : "RelatedPerson.meta.versionId",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.meta.lastUpdated",
      "path" : "RelatedPerson.meta.lastUpdated",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.meta.source",
      "path" : "RelatedPerson.meta.source",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.implicitRules",
      "path" : "RelatedPerson.implicitRules",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.language",
      "path" : "RelatedPerson.language",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.text.status",
      "path" : "RelatedPerson.text.status",
      "patternCode" : "extensions"
    },
    {
      "id" : "RelatedPerson.contained",
      "path" : "RelatedPerson.contained",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.extension",
      "path" : "RelatedPerson.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "rules" : "open"
      },
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.extension:additionalComment",
      "path" : "RelatedPerson.extension",
      "sliceName" : "additionalComment",
      "definition" : "Hier werden weitere Informationen, beispielsweise die Pflegebedürftigkeitssituation der Kontaktperson, dargestellt. Wenn die Kontaktperson auch gesetzlich betreuende Person ist, kann hier beschrieben werden, für welchen Bereich sie bevollmächtigt ist.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_EX_Base_Additional_Comment"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.extension:additionalComment.value[x]:valueString",
      "path" : "RelatedPerson.extension.value[x]",
      "sliceName" : "valueString",
      "type" : [{
        "code" : "string"
      }],
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.identifier",
      "path" : "RelatedPerson.identifier",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.identifier.use",
      "path" : "RelatedPerson.identifier.use",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.identifier.type.coding",
      "path" : "RelatedPerson.identifier.type.coding",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.identifier.type.coding.system",
      "path" : "RelatedPerson.identifier.type.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.identifier.type.coding.version",
      "path" : "RelatedPerson.identifier.type.coding.version",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.identifier.type.coding.code",
      "path" : "RelatedPerson.identifier.type.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.identifier.type.coding.display",
      "path" : "RelatedPerson.identifier.type.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.identifier.type.coding.userSelected",
      "path" : "RelatedPerson.identifier.type.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.identifier.type.text",
      "path" : "RelatedPerson.identifier.type.text",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.identifier.system",
      "path" : "RelatedPerson.identifier.system",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.identifier.value",
      "path" : "RelatedPerson.identifier.value",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.identifier.period",
      "path" : "RelatedPerson.identifier.period",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.active",
      "path" : "RelatedPerson.active",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.patient",
      "path" : "RelatedPerson.patient",
      "short" : "Zu behandelnde Person",
      "definition" : "Hier wird die zu behandelnde Person referenziert.",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Patient|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.patient.identifier",
      "path" : "RelatedPerson.patient.identifier",
      "min" : 1,
      "type" : [{
        "code" : "Identifier",
        "profile" : ["http://fhir.de/StructureDefinition/identifier-kvid-10"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.relationship",
      "path" : "RelatedPerson.relationship",
      "definition" : "In diesem Element werden Angaben über die Beziehung der Kontaktperson zur/zum Patient:in gemacht. Diese werden als codierte Information und/oder als Freitext angegeben.",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.relationship.coding",
      "path" : "RelatedPerson.relationship.coding",
      "definition" : "Hier wird die Beziehung der Kontaktperson zur/zum Patient:in anhand eines Codes aus einer Werteliste angegeben.",
      "mustSupport" : true,
      "binding" : {
        "strength" : "preferred",
        "valueSet" : "http://hl7.org/fhir/ValueSet/relatedperson-relationshiptype"
      }
    },
    {
      "id" : "RelatedPerson.relationship.coding.system",
      "path" : "RelatedPerson.relationship.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.relationship.coding.version",
      "path" : "RelatedPerson.relationship.coding.version",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.relationship.coding.code",
      "path" : "RelatedPerson.relationship.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.relationship.coding.display",
      "path" : "RelatedPerson.relationship.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.relationship.coding.userSelected",
      "path" : "RelatedPerson.relationship.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.relationship.text",
      "path" : "RelatedPerson.relationship.text",
      "definition" : "Hier wird ein Freitext eingetragen.",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.name",
      "path" : "RelatedPerson.name",
      "definition" : "Dieses Element beschreibt diverse Namensbestandteile einer Person.",
      "max" : "1",
      "type" : [{
        "code" : "HumanName",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Datatype_Name"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.name.text",
      "path" : "RelatedPerson.name.text",
      "definition" : "Hier wird der vollständige Name mit Vornamen und allen Vorsatzwörtern und Namenszusätzen angegeben. Der vollständige Name soll alle Namensteile in ihrer korrekten Reihenfolge abbilden.",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.name.family",
      "path" : "RelatedPerson.name.family",
      "definition" : "Hier wird der Nachname einer Person angegeben.",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.name.family.extension",
      "path" : "RelatedPerson.name.family.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "ordered" : false,
        "rules" : "closed"
      },
      "min" : 1,
      "max" : "3",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.name.family.extension:namenszusatz",
      "path" : "RelatedPerson.name.family.extension",
      "sliceName" : "namenszusatz",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.name.family.extension:namenszusatz.value[x]",
      "path" : "RelatedPerson.name.family.extension.value[x]",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.name.family.extension:nachname",
      "path" : "RelatedPerson.name.family.extension",
      "sliceName" : "nachname",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.name.family.extension:nachname.value[x]",
      "path" : "RelatedPerson.name.family.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.name.family.extension:vorsatzwort",
      "path" : "RelatedPerson.name.family.extension",
      "sliceName" : "vorsatzwort",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.name.family.extension:vorsatzwort.value[x]",
      "path" : "RelatedPerson.name.family.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.name.given",
      "path" : "RelatedPerson.name.given",
      "definition" : "Hier wird der Vorname einer Person angegeben.",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.name.prefix",
      "path" : "RelatedPerson.name.prefix",
      "definition" : "Hier wird der Titel als akademischer Grad angegeben.",
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.name.prefix.extension:prefix-qualifier",
      "path" : "RelatedPerson.name.prefix.extension",
      "sliceName" : "prefix-qualifier",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.name.prefix.extension:prefix-qualifier.value[x]:valueCode",
      "path" : "RelatedPerson.name.prefix.extension.value[x]",
      "sliceName" : "valueCode",
      "type" : [{
        "code" : "code"
      }],
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.name.suffix",
      "path" : "RelatedPerson.name.suffix",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.name.period",
      "path" : "RelatedPerson.name.period",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.telecom",
      "path" : "RelatedPerson.telecom",
      "definition" : "Dieses Element beschreibt die vorhandenen Kontaktmöglichkeiten.",
      "type" : [{
        "code" : "ContactPoint",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Datatype_Contactpoint"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.telecom.system",
      "path" : "RelatedPerson.telecom.system",
      "definition" : "Hier wird die Art des Kontaktes definiert.",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.telecom.value",
      "path" : "RelatedPerson.telecom.value",
      "definition" : "In diesem Element werden Kontaktinformationen passend zum Kontaktkanal angegeben. Beispiele für mögliche Werte sind: 'm.mustermann@mio42.de' (beim Kontaktkanal 'E-mail', oder '030712345678' (beim Kontaktkanal 'Telefon').",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.telecom.use",
      "path" : "RelatedPerson.telecom.use",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.telecom.rank",
      "path" : "RelatedPerson.telecom.rank",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.telecom.period",
      "path" : "RelatedPerson.telecom.period",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.gender",
      "path" : "RelatedPerson.gender",
      "definition" : "In diesem Element befindet sich die Geschlechtsdefinition nach den Versichertenstammdaten (VSD).",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.gender.extension",
      "path" : "RelatedPerson.gender.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "rules" : "closed"
      },
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.gender.extension:other-amtlich",
      "path" : "RelatedPerson.gender.extension",
      "sliceName" : "other-amtlich",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://fhir.de/StructureDefinition/gender-amtlich-de"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.gender.extension:other-amtlich.value[x]",
      "path" : "RelatedPerson.gender.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.gender.extension:other-amtlich.value[x].system",
      "path" : "RelatedPerson.gender.extension.value[x].system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.gender.extension:other-amtlich.value[x].version",
      "path" : "RelatedPerson.gender.extension.value[x].version",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.gender.extension:other-amtlich.value[x].code",
      "path" : "RelatedPerson.gender.extension.value[x].code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.gender.extension:other-amtlich.value[x].display",
      "path" : "RelatedPerson.gender.extension.value[x].display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.gender.extension:other-amtlich.value[x].userSelected",
      "path" : "RelatedPerson.gender.extension.value[x].userSelected",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.birthDate",
      "path" : "RelatedPerson.birthDate",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.address",
      "path" : "RelatedPerson.address",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "type"
        }],
        "rules" : "closed"
      },
      "definition" : "Hier werden Angaben zur Anschrift der Kontaktperson gemacht.",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address.use",
      "path" : "RelatedPerson.address.use",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.address.state",
      "path" : "RelatedPerson.address.state",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.address:Strassenanschrift",
      "path" : "RelatedPerson.address",
      "sliceName" : "Strassenanschrift",
      "definition" : "Hier werden Angaben zur Straßenanschrift gemacht.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "Address",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Datatype_Street_Address"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Strassenanschrift.extension",
      "path" : "RelatedPerson.address.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "description" : "Extensions are always sliced by (at least) url",
        "rules" : "closed"
      },
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Strassenanschrift.extension:Stadtteil",
      "path" : "RelatedPerson.address.extension",
      "sliceName" : "Stadtteil",
      "definition" : "In diesem Element kann der Stadt- oder Ortsteil angegeben werden, z. B. wenn der Ort ein Stadtstaat ist.",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Strassenanschrift.extension:Stadtteil.value[x]",
      "path" : "RelatedPerson.address.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Strassenanschrift.use",
      "path" : "RelatedPerson.address.use",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.address:Strassenanschrift.type",
      "path" : "RelatedPerson.address.type",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Strassenanschrift.text",
      "path" : "RelatedPerson.address.text",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.address:Strassenanschrift.line",
      "path" : "RelatedPerson.address.line",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Strassenanschrift.line.extension",
      "path" : "RelatedPerson.address.line.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "ordered" : false,
        "rules" : "closed"
      },
      "max" : "3",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Strassenanschrift.line.extension:Strasse",
      "path" : "RelatedPerson.address.line.extension",
      "sliceName" : "Strasse",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Strassenanschrift.line.extension:Strasse.value[x]",
      "path" : "RelatedPerson.address.line.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Strassenanschrift.line.extension:Hausnummer",
      "path" : "RelatedPerson.address.line.extension",
      "sliceName" : "Hausnummer",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Strassenanschrift.line.extension:Hausnummer.value[x]",
      "path" : "RelatedPerson.address.line.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Strassenanschrift.line.extension:Adresszusatz",
      "path" : "RelatedPerson.address.line.extension",
      "sliceName" : "Adresszusatz",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Strassenanschrift.line.extension:Adresszusatz.value[x]",
      "path" : "RelatedPerson.address.line.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Strassenanschrift.city",
      "path" : "RelatedPerson.address.city",
      "definition" : "In dieses Feld kann der Ort eingetragen werden.",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Strassenanschrift.state",
      "path" : "RelatedPerson.address.state",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.address:Strassenanschrift.postalCode",
      "path" : "RelatedPerson.address.postalCode",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Strassenanschrift.country",
      "path" : "RelatedPerson.address.country",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Strassenanschrift.period",
      "path" : "RelatedPerson.address.period",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.address:Postfach",
      "path" : "RelatedPerson.address",
      "sliceName" : "Postfach",
      "definition" : "Hier werden Angaben zu einem Postfach gemacht.",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "Address",
        "profile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_Base_Datatype_Post_Office_Box"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Postfach.extension",
      "path" : "RelatedPerson.address.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "description" : "Extensions are always sliced by (at least) url",
        "rules" : "closed"
      },
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Postfach.extension:Stadtteil",
      "path" : "RelatedPerson.address.extension",
      "sliceName" : "Stadtteil",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Postfach.extension:Stadtteil.value[x]",
      "path" : "RelatedPerson.address.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Postfach.use",
      "path" : "RelatedPerson.address.use",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.address:Postfach.type",
      "path" : "RelatedPerson.address.type",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Postfach.text",
      "path" : "RelatedPerson.address.text",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.address:Postfach.line",
      "path" : "RelatedPerson.address.line",
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Postfach.line.extension",
      "path" : "RelatedPerson.address.line.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "ordered" : false,
        "rules" : "closed"
      },
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Postfach.line.extension:Postfach",
      "path" : "RelatedPerson.address.line.extension",
      "sliceName" : "Postfach",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Postfach.line.extension:Postfach.value[x]",
      "path" : "RelatedPerson.address.line.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Postfach.city",
      "path" : "RelatedPerson.address.city",
      "definition" : "In dieses Feld kann der Ort eingetragen werden.",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Postfach.state",
      "path" : "RelatedPerson.address.state",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.address:Postfach.postalCode",
      "path" : "RelatedPerson.address.postalCode",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Postfach.country",
      "path" : "RelatedPerson.address.country",
      "mustSupport" : true
    },
    {
      "id" : "RelatedPerson.address:Postfach.period",
      "path" : "RelatedPerson.address.period",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.photo",
      "path" : "RelatedPerson.photo",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.period",
      "path" : "RelatedPerson.period",
      "max" : "0"
    },
    {
      "id" : "RelatedPerson.communication",
      "path" : "RelatedPerson.communication",
      "max" : "0"
    }]
  }
}

```

# KBV_PR_MIO_LAB_BodyStructure - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* [**FHIR-Artefakte**](artifacts.md)
* **KBV_PR_MIO_LAB_BodyStructure**

## Resource Profile: KBV_PR_MIO_LAB_BodyStructure 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_BodyStructure | *Version*:1.0.0-update |
| Draft as of 2026-06-11 | *Computable Name*:KBV_PR_MIO_LAB_BodyStructure |
| **Copyright/Legal**: Im folgenden Profil können Codes aus den Code-Systemen SNOMED CT®, LOINC, Ucum, ATC, ICD-10-GM, ICD-10-WHO, OPS, Alpha-ID/Alpha-ID-SE und ICF enthalten sein, die dem folgenden Urheberrecht unterliegen: This material includes SNOMED CT® Clinical Terms® (SNOMED CT® CT®) which is used by permission of SNOMED CT® International. All rights reserved. SNOMED CT® CT®, was originally created by The College of American Pathologists. SNOMED CT® and SNOMED CT® CT are registered trademarks of SNOMED CT® International. Implementers of these artefacts must have the appropriate SNOMED CT® CT Affiliate license. This material contains content from LOINC (http://LOINC.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://LOINC.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This product includes all or a portion of the UCUM table, UCUM codes, and UCUM definitions or is derived from it, subject to a license from Regenstrief Institute, Inc. and The UCUM Organization. Your use of the UCUM table, UCUM codes, UCUM definitions also is subject to this license, a copy of which is available at http://unitsofmeasure.org. The current complete UCUM table, UCUM Specification are available for download at http://unitsofmeasure.org. The UCUM table and UCUM codes are copyright © 1995-2009, Regenstrief Institute, Inc. and the Unified Codes for Units of Measures (UCUM) Organization. All rights reserved. THE UCUM TABLE (IN ALL FORMATS), UCUM DEFINITIONS, AND SPECIFICATION ARE PROVIDED ‘AS IS.’ ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. Dieses Material enthält Inhalte aus ATC. Die Erstellung erfolgte unter Verwendung der Datenträger der amtlichen Fassung der ATC-Klassifikation mit DDD des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICD-10-GM, ICD-10-WHO, OPS Alpha-ID ans Alpha-ID-SE. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM). Dieses Material enthält Inhalte aus ICF. Die Erstellung erfolgt unter Verwendung der maschinenlesbaren Fassung des Deutschen Instituts für Medizinische Dokumentation und Information (DIMDI). ICF-Kodes, -Begriffe und -Texte © Weltgesundheitsorganisation, übersetzt und herausgegeben durch das Deutsche Institut für Medizinische Dokumentation und Information von der International classification of functioning, disability and health - ICF, herausgegeben durch die Weltgesundheitsorganisation. | |

 
Dieses Profil bildet eine Körperstruktur ab. 
Angaben zur Körperstruktur können enthalten: 
* Körperstelle (anatomische Benennung)
* Lateralität (für paarige Organe/Strukturen: rechts, links, beidseits)
* Lokalisierung (für räumliche Angaben, z.B. oben, unten)
* Uhrzeigerposition (z.B. 12-Uhr-Position)
* Morphologie (z.B. pathologische Strukturen)
 

**Usages:**

* Use this Profile: [KBV_PR_MIO_LAB_Bundle](StructureDefinition-KBV-PR-MIO-LAB-Bundle.md)
* Refer to this Profile: [KBV_PR_MIO_LAB_Specimen](StructureDefinition-KBV-PR-MIO-LAB-Specimen.md)
* Examples for this Profile: [BodyStructure/6894b106-8a91-4cfb-9826-443aed21c98b](BodyStructure-6894b106-8a91-4cfb-9826-443aed21c98b.md) and [BodyStructure/72f65586-b2b5-465f-a792-89fb7545d7bc](BodyStructure-72f65586-b2b5-465f-a792-89fb7545d7bc.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/kbv.mio.laborbefund|current/StructureDefinition/StructureDefinition-KBV-PR-MIO-LAB-BodyStructure.json)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-KBV-PR-MIO-LAB-BodyStructure.csv), [Excel](StructureDefinition-KBV-PR-MIO-LAB-BodyStructure.xlsx), [Schematron](StructureDefinition-KBV-PR-MIO-LAB-BodyStructure.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "KBV-PR-MIO-LAB-BodyStructure",
  "url" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_BodyStructure",
  "version" : "1.0.0-update",
  "name" : "KBV_PR_MIO_LAB_BodyStructure",
  "title" : "KBV_PR_MIO_LAB_BodyStructure",
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
  "description" : "Dieses Profil bildet eine Körperstruktur ab.\n\n\nAngaben zur Körperstruktur können enthalten:\n\n* Körperstelle (anatomische Benennung)\n* Lateralität (für paarige Organe/Strukturen: rechts, links, beidseits)\n* Lokalisierung (für räumliche Angaben, z.B. oben, unten)\n* Uhrzeigerposition (z.B. 12-Uhr-Position)\n* Morphologie (z.B. pathologische Strukturen)",
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
    "identity" : "openehr",
    "uri" : "http://openehr.org",
    "name" : "Open EHR Archetype Mapping"
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
  "type" : "BodyStructure",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/BodyStructure",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "BodyStructure",
      "path" : "BodyStructure",
      "definition" : "Angaben zur Körperstruktur können enthalten:\n\n* Körperstelle (anatomische Benennung)\n* Lateralität (für paarige Organe/Strukturen: rechts, links, beidseits)\n* Lokalisierung (für räumliche Angaben, z.B. oben, unten)\n* Uhrzeigerposition (z.B. 12-Uhr-Position)\n* Morphologie (z.B. pathologische Strukturen)"
    },
    {
      "id" : "BodyStructure.meta",
      "path" : "BodyStructure.meta",
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.meta.id",
      "path" : "BodyStructure.meta.id",
      "max" : "0"
    },
    {
      "id" : "BodyStructure.meta.versionId",
      "path" : "BodyStructure.meta.versionId",
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.meta.lastUpdated",
      "path" : "BodyStructure.meta.lastUpdated",
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.meta.source",
      "path" : "BodyStructure.meta.source",
      "max" : "0"
    },
    {
      "id" : "BodyStructure.implicitRules",
      "path" : "BodyStructure.implicitRules",
      "max" : "0"
    },
    {
      "id" : "BodyStructure.language",
      "path" : "BodyStructure.language",
      "max" : "0"
    },
    {
      "id" : "BodyStructure.text.status",
      "path" : "BodyStructure.text.status",
      "patternCode" : "extensions"
    },
    {
      "id" : "BodyStructure.contained",
      "path" : "BodyStructure.contained",
      "max" : "0"
    },
    {
      "id" : "BodyStructure.extension",
      "path" : "BodyStructure.extension",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "url"
        }],
        "ordered" : false,
        "rules" : "closed"
      },
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure",
      "path" : "BodyStructure.extension",
      "sliceName" : "includedStructure",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "Extension",
        "profile" : ["http://hl7.org/fhir/5.0/StructureDefinition/extension-BodyStructure.includedStructure"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:structure",
      "path" : "BodyStructure.extension.extension",
      "sliceName" : "structure",
      "short" : "Anatomische Körperstelle",
      "definition" : "Anatomische Benennung eines Körperteils, Körperdetails oder Organs.",
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:structure.extension",
      "path" : "BodyStructure.extension.extension.extension",
      "max" : "0"
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:structure.value[x]",
      "path" : "BodyStructure.extension.extension.value[x]",
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:structure.value[x].coding",
      "path" : "BodyStructure.extension.extension.value[x].coding",
      "definition" : "Angabe der Körperstelle als SNOMED CT®-Code, beispielsweise:\n\n* Vene: 120579003 | Vein part (body structure)\n* Arterie: 119205003 | Arterial part (body structure)\n* Kapillargefäß: 20982000 | Structure of capillary blood vessel (organ) (body structure)\n* Spinalkanal: 61853006 | Spinal canal structure (body structure)\n* Urethra: 13648007 | Urethral structure (body structure)\n* Harnblase: 89837001 | Urinary bladder structure (body structure)\n* Respirationstrakt: 321667001 | Respiratory tract structure (body structure)",
      "max" : "1",
      "mustSupport" : true,
      "binding" : {
        "strength" : "example",
        "valueSet" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Body_Structures_SNOMED_CT|1.0.0-update"
      }
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:structure.value[x].coding.system",
      "path" : "BodyStructure.extension.extension.value[x].coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:structure.value[x].coding.version",
      "path" : "BodyStructure.extension.extension.value[x].coding.version",
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:structure.value[x].coding.code",
      "path" : "BodyStructure.extension.extension.value[x].coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:structure.value[x].coding.display",
      "path" : "BodyStructure.extension.extension.value[x].coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:structure.value[x].coding.userSelected",
      "path" : "BodyStructure.extension.extension.value[x].coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:structure.value[x].text",
      "path" : "BodyStructure.extension.extension.value[x].text",
      "definition" : "Freitext Bezeichnung der Körperstelle. Mögliche Verwendung:\n\n* Ersatzweise, wenn keine passende Codierung zugeordnet werden kann\n* Als Freitextergänzung, wenn die Körperstelle nicht ausreichend spezifisch codiert werden kann.",
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:laterality",
      "path" : "BodyStructure.extension.extension",
      "sliceName" : "laterality",
      "short" : "Angabe der Lateralität bei paarigen anatomischen Strukturen",
      "definition" : "Das Datenelement Lateralität gibt bei paarigen Organen (z.B. Niere) oder paarigen Körperteilen (z.B. Arm, Bein) an, ob \"Rechts\", \"Links\" oder \"Bilateral\" betroffen ist.\n\n\nAchtung: Die Codes \"links\", \"rechts\" und \"bilateral\" können sowohl am Datenelement \"Lateralität\" als auch bei \"Lokalisation\" angegeben werden. Sie haben in beiden Fällen jedoch unterschiedliche Bedeutungen. Mit Lateralität beschreiben sie die Seitenangabe bei paarigen Organen und Körperteilen. Mit Lokalisation beschreiben sie die nähere Lokalisation innerhalb eines (meist unpaarig vorliegendem) Organs/ Körperteils (z.B. linke Seitenwand der Blase). Theoretisch ist die Angabe des selben Codes an beiden Stellen möglich, jedoch fachlich meist nicht sinnvoll (z.B. \"links an der linken Niere\"; korrekt wäre stattdessen \"lateral an der linken Niere\").",
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:laterality.extension",
      "path" : "BodyStructure.extension.extension.extension",
      "max" : "0"
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:laterality.value[x]",
      "path" : "BodyStructure.extension.extension.value[x]",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:laterality.value[x].coding",
      "path" : "BodyStructure.extension.extension.value[x].coding",
      "max" : "1",
      "mustSupport" : true,
      "binding" : {
        "strength" : "extensible",
        "valueSet" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Laterality_Body_Structure_SNOMED_CT|1.0.0-update"
      }
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:laterality.value[x].coding.system",
      "path" : "BodyStructure.extension.extension.value[x].coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:laterality.value[x].coding.version",
      "path" : "BodyStructure.extension.extension.value[x].coding.version",
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:laterality.value[x].coding.code",
      "path" : "BodyStructure.extension.extension.value[x].coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:laterality.value[x].coding.display",
      "path" : "BodyStructure.extension.extension.value[x].coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:laterality.value[x].coding.userSelected",
      "path" : "BodyStructure.extension.extension.value[x].coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:laterality.value[x].text",
      "path" : "BodyStructure.extension.extension.value[x].text",
      "definition" : "Hier wird die Lateralität als Freitext angegeben.",
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:bodyLandmarkOrientation",
      "path" : "BodyStructure.extension.extension",
      "sliceName" : "bodyLandmarkOrientation",
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:bodyLandmarkOrientation.extension:landmarkDescription",
      "path" : "BodyStructure.extension.extension.extension",
      "sliceName" : "landmarkDescription",
      "max" : "0"
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:bodyLandmarkOrientation.extension:clockFacePosition",
      "path" : "BodyStructure.extension.extension.extension",
      "sliceName" : "clockFacePosition",
      "short" : "Örtliche Präzisierung als Uhrzeigerposition",
      "definition" : "Eine Beschreibung der Richtung, in der sich etwas von einem Orientierungspunkt entfernt befindet, basierend auf einem radialen Zifferblatt, als sogenannte Uhr-Position (Bsp. 3-Uhr-Position, 12 Uhr-Position).",
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:bodyLandmarkOrientation.extension:clockFacePosition.extension",
      "path" : "BodyStructure.extension.extension.extension.extension",
      "max" : "0"
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:bodyLandmarkOrientation.extension:clockFacePosition.value[x]",
      "path" : "BodyStructure.extension.extension.extension.value[x]",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:bodyLandmarkOrientation.extension:clockFacePosition.value[x].coding",
      "path" : "BodyStructure.extension.extension.extension.value[x].coding",
      "max" : "1",
      "mustSupport" : true,
      "binding" : {
        "strength" : "example",
        "valueSet" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Bodystructure_Body_Landmark_Clock_Face_Position|1.0.0-update"
      }
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:bodyLandmarkOrientation.extension:clockFacePosition.value[x].coding.system",
      "path" : "BodyStructure.extension.extension.extension.value[x].coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:bodyLandmarkOrientation.extension:clockFacePosition.value[x].coding.version",
      "path" : "BodyStructure.extension.extension.extension.value[x].coding.version",
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:bodyLandmarkOrientation.extension:clockFacePosition.value[x].coding.code",
      "path" : "BodyStructure.extension.extension.extension.value[x].coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:bodyLandmarkOrientation.extension:clockFacePosition.value[x].coding.display",
      "path" : "BodyStructure.extension.extension.extension.value[x].coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:bodyLandmarkOrientation.extension:clockFacePosition.value[x].coding.userSelected",
      "path" : "BodyStructure.extension.extension.extension.value[x].coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:bodyLandmarkOrientation.extension:clockFacePosition.value[x].text",
      "path" : "BodyStructure.extension.extension.extension.value[x].text",
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:bodyLandmarkOrientation.extension:distanceFromLandmark",
      "path" : "BodyStructure.extension.extension.extension",
      "sliceName" : "distanceFromLandmark",
      "max" : "0"
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:bodyLandmarkOrientation.extension:distanceFromLandmark.extension:device",
      "path" : "BodyStructure.extension.extension.extension.extension",
      "sliceName" : "device",
      "max" : "0"
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:bodyLandmarkOrientation.extension:distanceFromLandmark.extension:value",
      "path" : "BodyStructure.extension.extension.extension.extension",
      "sliceName" : "value",
      "max" : "0"
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:bodyLandmarkOrientation.extension:surfaceOrientation",
      "path" : "BodyStructure.extension.extension.extension",
      "sliceName" : "surfaceOrientation",
      "max" : "0"
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:spatialReference",
      "path" : "BodyStructure.extension.extension",
      "sliceName" : "spatialReference",
      "max" : "0"
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:qualifier",
      "path" : "BodyStructure.extension.extension",
      "sliceName" : "qualifier",
      "short" : "Örtliche Qualifizierung oder Präzisierung einer anatomischen Körperstelle",
      "definition" : "An dieser Stelle kann eine präzisere Beschreibung der Lokalisation innerhalb einer Körperstruktur / eines Organs / Körperteils abgebildet werden. Es geht um räumliche Angaben, beispielsweise: oben, unten, medial, lateral oder Angabe eines Quadranten.\n\n\nAchtung: Die Codes \"links\", \"rechts\" und \"bilateral\" können sowohl am Datenelement \"Lateralität\" als auch bei \"Lokalisation\" angegeben werden. Sie haben in beiden Fällen jedoch unterschiedliche Bedeutungen. Mit Lateralität beschreiben sie die Seitenangabe bei paarigen Organen und Körperteilen. Mit Lokalisation beschreiben sie die nähere Lokalisation innerhalb eines (meist unpaarig vorliegendem) Organs/ Körperteils (z.B. linke Seitenwand der Blase). Theoretisch ist die Angabe des selben Codes an beiden Stellen möglich, jedoch fachlich meist nicht sinnvoll (z.B. \"links an der linken Niere\"; korrekt wäre stattdessen \"lateral an der linken Niere\").",
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:qualifier.extension",
      "path" : "BodyStructure.extension.extension.extension",
      "max" : "0"
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:qualifier.value[x].coding",
      "path" : "BodyStructure.extension.extension.value[x].coding",
      "max" : "1",
      "mustSupport" : true,
      "binding" : {
        "strength" : "example",
        "valueSet" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Localisation_Body_Structure_SNOMED_CT|1.0.0-update"
      }
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:qualifier.value[x].coding.system",
      "path" : "BodyStructure.extension.extension.value[x].coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:qualifier.value[x].coding.version",
      "path" : "BodyStructure.extension.extension.value[x].coding.version",
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:qualifier.value[x].coding.code",
      "path" : "BodyStructure.extension.extension.value[x].coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:qualifier.value[x].coding.display",
      "path" : "BodyStructure.extension.extension.value[x].coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:qualifier.value[x].coding.userSelected",
      "path" : "BodyStructure.extension.extension.value[x].coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "BodyStructure.extension:includedStructure.extension:qualifier.value[x].text",
      "path" : "BodyStructure.extension.extension.value[x].text",
      "definition" : "Hier wird die Lokalisierung als Freitext angegeben.",
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.identifier",
      "path" : "BodyStructure.identifier",
      "max" : "0"
    },
    {
      "id" : "BodyStructure.active",
      "path" : "BodyStructure.active",
      "max" : "0"
    },
    {
      "id" : "BodyStructure.morphology",
      "path" : "BodyStructure.morphology",
      "short" : "(Abnorm-)Morphologische Einordnung zur Körperstruktur.",
      "definition" : "(Abnorm-)Morphologische Ausprägung(en) der Körperstruktur, beispielsweise Gewebeveränderungen, Entzündungsaspekte, Fehlbildungen.\n\n\nDisclaimer: Da das Element BodyStructure.morphology auf eine Kardinalität von 0..1 beschränkt ist, können mehrere morphologische Erscheinungen nicht in strukturierter Form angegeben werden. Alternativ werden weitere morphologische Ausprägungen als ergänzende Angaben formuliert.",
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.morphology.coding",
      "path" : "BodyStructure.morphology.coding",
      "definition" : "Hier wird die Morphologie als SNOMED CT®-Code angegeben, beispielsweise:\n\n* 35566002 |Haematoma (morphologic abnormality)|\n* 76197007 |Hyperplasia (morphologic abnormality)|\n* 367643001 |Cyst (morphologic abnormality)|\n* 367646009 |Pus (morphologic abnormality)|\n* 783806000 |Vascular malformation (morphologic abnormality)|",
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.morphology.coding.system",
      "path" : "BodyStructure.morphology.coding.system",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.morphology.coding.version",
      "path" : "BodyStructure.morphology.coding.version",
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.morphology.coding.code",
      "path" : "BodyStructure.morphology.coding.code",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.morphology.coding.display",
      "path" : "BodyStructure.morphology.coding.display",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.morphology.coding.userSelected",
      "path" : "BodyStructure.morphology.coding.userSelected",
      "max" : "0"
    },
    {
      "id" : "BodyStructure.morphology.text",
      "path" : "BodyStructure.morphology.text",
      "definition" : "Hier wird die Morphologie als Freitext angegeben.",
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.location",
      "path" : "BodyStructure.location",
      "max" : "0"
    },
    {
      "id" : "BodyStructure.locationQualifier",
      "path" : "BodyStructure.locationQualifier",
      "max" : "0"
    },
    {
      "id" : "BodyStructure.description",
      "path" : "BodyStructure.description",
      "definition" : "In diesem Element werden ergänzende Freitext-Angaben zur Körperstruktur gemacht.\n\n  Die Notwendigkeit ergänzender Angaben zur Körperstruktur ergibt sich unter anderem aus der Anforderung, weitere morphologische Erscheinungen zu dokumentieren.\n\n\n  Disclaimer: Da das Element BodyStructure.morphology auf eine Kardinalität von 0..1 beschränkt ist, können mehrere morphologische Erscheinungen nicht in strukturierter Form angegeben werden.",
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.image",
      "path" : "BodyStructure.image",
      "max" : "0"
    },
    {
      "id" : "BodyStructure.patient",
      "path" : "BodyStructure.patient",
      "short" : "Zu behandelnde Person",
      "definition" : "Hier wird die zu behandelnde Person referenziert.",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Patient|1.0.0-update"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "BodyStructure.patient.identifier",
      "path" : "BodyStructure.patient.identifier",
      "min" : 1,
      "type" : [{
        "code" : "Identifier",
        "profile" : ["http://fhir.de/StructureDefinition/identifier-kvid-10"]
      }],
      "mustSupport" : true
    }]
  }
}

```

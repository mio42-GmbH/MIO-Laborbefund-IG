# Projektübersicht - MIO Laborbefund v1.0.0-update

MIO Laborbefund

Version 1.0.0-update - ci-build 

* [**Table of Contents**](toc.md)
* **Projektübersicht**

## Projektübersicht

| | |
| :--- | :--- |
| *Official URL*:https://fhir.kbv.de/ImplementationGuide/kbv.mio.laborbefund | *Version*:1.0.0-update |
| Draft as of 2026-06-19 | *Computable Name*:KBVMIOLaborbefund |

### Laborbefunde heute

Die Ergebnisse von patientenbezogenen medizinischen Laboruntersuchungen werden in Form eines Laborbefundes zusammengestellt. Das ist ein labormedizinisch ärztlich validierter Befundbericht, der neben administrativen Daten (z. B. Einsender:in, Patient:in, leistungserbringendes Laboratorium, Befunder:in) die Ergebnisse der gemessenen Laborparameter und die Bewertung dieser im medizinischen Kontext enthält.

Labordiagnostik wird fachübergreifend für nahezu alle medizinischen Disziplinen angewendet, sowohl im ambulanten als auch im stationären Bereich. Laborergebnisse spielen eine wichtige Rolle bei der Diagnose, der Behandlung und der Nachsorge von Patient:innen.

Die Laborbefundkommunikation in Deutschland basiert nach heutigem Stand noch zu einem Teil auf Papierformularen und ausgedruckten Befunden. Die Digitalisierung der Laborbefundkommunikation ist unterschiedlich weit ausgereift. Teilweise existieren analoge und digitale Prozesse in Kombination, z. B. erfolgt die Anforderung aus einer Praxis per Papierformular, das Ergebnis wird vom Labor jedoch digital übermittelt. Wenn eine Aushändigung des Laborbefundes direkt an Patient:innen erfolgt, dann durch die behandelnde Person oft in Papierform. Zur Digitalisierung von Laborbefunden gibt es national und international zahlreiche Projekte und einige Standardisierungsansätze (z. B. LDT 2 und LDT 3 im niedergelassenen Sektor, HL7 v2 und zukünftig ISiK im KH-Sektor). Aufgrund eines fehlenden, sektorenübergreifend verbindlichen semantischen und syntaktischen Standards ist der digitale Austausch von Labordaten zwischen einzelnen Leistungserbringenden und deren nutzbringende Weiterverarbeitung im empfangenden Primärsystem aktuell nicht der Regelfall. Er funktioniert meist nur individuell zwischen beauftragender/m Praxis/KH und konkretem Labor. Ein Austausch und eine Weiternutzung für weitere Beteiligte über die ePA erfolgt aktuell über PDF/A.

### MIO-Umsetzung

Die Digitalisierung von Laborbefunden in strukturierter, standardisiert maschinenlesbarer Form ist die Grundlage für eine präzise und nahtlose Kommunikation der Laborergebnisse zwischen behandelnden Personen und ihren PatientInnen. Laborbefunde zukünftig ohne Mehraufwand generieren, verarbeiten und kommunizieren zu können, erfordert langfristig ein einheitliches syntaktisches Format (**HL7® FHIR®**). Für die digitale Zustellung des Laborbefundes an jegliche Praxis oder Klinik wäre dann keine Format-Konvertierung mehr notwendig und das MIO könnte von sämtlichen Software-Systemen unmittelbar gelesen und angezeigt werden.

Perspektivisch erlaubt ein automatisierter Versand und Empfang von strukturierten digitalen Laborbefunden zwischen leistungserbringenden Laboratorien und empfangenden Systemen, den Verarbeitungsaufwand zu minimieren und die Auswertungsprozesse zu optimieren. Das übergeordnete Ziel ist es, die Qualität der medizinischen Diagnostik sicherzustellen, kritische Laborergebnisse rechtzeitig zu identifizieren und Patient:innen die bestmögliche Versorgung zukommen zu lassen.

Die Umsetzung des MIO Laborbefund in der ersten Ausbaustufe beginnt mit den essenziellen fachübergreifenden Laboruntersuchungen, inklusive Antigen- und Antikörperbestimmung, sodass mit diesem Ansatz die Voraussetzung für eine breite Verwendbarkeit geschaffen wird. Spezialbereiche, wie beispielsweise Mikrobiologische Kulturen, Zytologie oder Humangenetik werden nachgelagert schrittweise umgesetzt.

### Wo stehen wir?

Die Spezifikationserstellung für das MIO Laborbefund wurde im Sommer 2024 erstmalig abgeschlossen und hat im Sommer 2025 ein Update erfahren. Die Datenstruktur hierfür wurde jeweils mit den maßgeblich betroffenen Fachgesellschaften und Spitzenorganisationen im Rahmen von fachlichen Reviews gemeinsam spezifiziert.

Im Herbst 2025 fand das Xt-EHR-Konsultationsverfahren für den ab März 2031 im Europäischen Datenraum (EHDS) einheitlich zu verwendenden Laboratory Report statt (s. [aktuelle Fassung](https://build.fhir.org/ig/hl7-eu/laboratory/)). Das MIO Laborbefund hat zur Sicherstellung der notwendigen Kompatibilität entsprechende Anpassungen erfahren. Der nun seitens der mio42 GmbH erreichte Zwischenstand wird hiermit veröffentlicht, um den Primärsystemanbietern und Anwendenden frühzeitige Orientierung und abschließende Feedback-Möglichkeit zu geben. Damit sollen sowohl die Spezifikation als auch die Begleittexte und Unterstützungspakete ihren letzten Feinschliff bekommen. Weitere Informationen zur Beteiligung an dieser Feedbackrunde erhalten Sie auf der [Feedback-Seite](./Feedback.md).

### Nächste Schritte

Seit Mai 2026 befinden wir uns in der Abstimmung mit der gematik zur Integration des MIO Laborbefund in die ePA-Aktensysteme. Diese Arbeiten münden dann in einem gemeinsamen Implementation Guide mit der gematik zum digital gestützten Laborprozess (dgLP). Dieser soll entsprechend der [OneRoadmap der gematik](https://fachportal.gematik.de/schnelleinstieg/roadmap) zum Jahresende 2026 veröffentlicht werden.

Stand: Juni 2026

### Kontakt & Support

Allgemeine Fragen und Anmerkungen zum MIO Laborbefund können Sie via E-Mail an [laborbefund@mio42.de](mailto:laborbefund@mio42.de) mit dem Betreff “Zwischenveröffentlichung MIO Laborbefund” schicken.

### Abhängigkeiten













*There are no Global profiles defined*

This is an R4 IG. None of the features it uses are changed in R4B, so it can be used as is with R4B systems. Packages for both [R4 (kbv.mio.laborbefund.r4)](package.r4.tgz) and [R4B (kbv.mio.laborbefund.r4b)](package.r4b.tgz) are available.



## Resource Content

```json
{
  "resourceType" : "ImplementationGuide",
  "id" : "kbv.mio.laborbefund",
  "url" : "https://fhir.kbv.de/ImplementationGuide/kbv.mio.laborbefund",
  "version" : "1.0.0-update",
  "name" : "KBVMIOLaborbefund",
  "title" : "MIO Laborbefund",
  "status" : "draft",
  "experimental" : false,
  "date" : "2026-06-19T11:56:12+02:00",
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
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "DE",
      "display" : "Germany"
    }]
  }],
  "packageId" : "kbv.mio.laborbefund",
  "license" : "CC0-1.0",
  "fhirVersion" : ["4.0.1"],
  "dependsOn" : [{
    "id" : "hl7tx",
    "extension" : [{
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/implementationguide-dependency-comment",
      "valueMarkdown" : "Automatically added as a dependency - all IGs depend on HL7 Terminology"
    }],
    "uri" : "http://terminology.hl7.org/ImplementationGuide/hl7.terminology",
    "packageId" : "hl7.terminology.r4",
    "version" : "7.2.0"
  },
  {
    "id" : "hl7ext",
    "extension" : [{
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/implementationguide-dependency-comment",
      "valueMarkdown" : "Automatically added as a dependency - all IGs depend on the HL7 Extension Pack"
    }],
    "uri" : "http://hl7.org/fhir/extensions/ImplementationGuide/hl7.fhir.uv.extensions",
    "packageId" : "hl7.fhir.uv.extensions.r4",
    "version" : "5.3.0"
  },
  {
    "id" : "de_basisprofil_r4",
    "uri" : "http://fhir.org/packages/de.basisprofil.r4/ImplementationGuide/de.basisprofil.r4",
    "packageId" : "de.basisprofil.r4",
    "version" : "1.5.4"
  },
  {
    "id" : "kbv_basis",
    "uri" : "http://fhir.org/packages/kbv.basis/ImplementationGuide/kbv.basis",
    "packageId" : "kbv.basis",
    "version" : "1.8.0"
  },
  {
    "id" : "kbv_all_st",
    "uri" : "http://fhir.org/packages/kbv.all.st/ImplementationGuide/kbv.all.st",
    "packageId" : "kbv.all.st",
    "version" : "1.24.0"
  },
  {
    "id" : "de_ihe_d_terminology",
    "uri" : "https://fhir.org/packages/de.ihe-d.terminology/ImplementationGuide/de.ihe-d.terminology",
    "packageId" : "de.ihe-d.terminology",
    "version" : "3.0.1"
  },
  {
    "id" : "hl7_fhir_uv_xver_r5_r4",
    "uri" : "http://hl7.org/fhir/uv/xver/ImplementationGuide/hl7.fhir.uv.xver-r5.r4",
    "packageId" : "hl7.fhir.uv.xver-r5.r4",
    "version" : "0.1.0"
  },
  {
    "id" : "hl7_fhir_eu_extensions_r4",
    "uri" : "http://hl7.eu/fhir/extensions/ImplementationGuide/hl7.fhir.eu.extensions",
    "packageId" : "hl7.fhir.eu.extensions.r4",
    "version" : "1.3.0"
  },
  {
    "id" : "hl7_fhir_eu_laboratory",
    "uri" : "http://hl7.eu/fhir/laboratory/ImplementationGuide/hl7.fhir.eu.laboratory",
    "packageId" : "hl7.fhir.eu.laboratory",
    "version" : "2.0.0"
  }],
  "definition" : {
    "extension" : [{
      "extension" : [{
        "url" : "code",
        "valueString" : "copyrightyear"
      },
      {
        "url" : "value",
        "valueString" : "2020+"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "releaselabel"
      },
      {
        "url" : "value",
        "valueString" : "ci-build"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "no-usage-check"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "excludettl"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "bundle-references-resolve"
      },
      {
        "url" : "value",
        "valueString" : "false"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DeviceDefinition_Specimen_Container"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Critical_Result"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Secondary_Specimen"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Device_Specimen_Container"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Sorting_Number"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Secondary_Status"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Specimen"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Practitioner"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ImplementationGuide/kbv-mio-laborbefund"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Source_Reference_Range"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Laboratory_Study_Group"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_PractitionerRole"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_zlog"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DiagnosticReport"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_ServiceRequest"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Device"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Organization"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Patient"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Extracorporeal_Source"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_External_Service"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Order_Entry_Time"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Association_Service"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Diskriminator"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_BodyStructure"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Substance"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Provenance"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_No_Linear_Reference_Range"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Device_Laboratory_Analyzer"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Device_Specimen_Subject"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DeviceDefinition_Laboratory_Analyzer"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DeviceDefinition_Specimen_Subject"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Composition"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Bundle"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DocumentReference"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Reason_Type"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Condition_Diagnosis"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Laboratory_Study"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Pseudonymized_Report"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Accredited_Service"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Alternative_Result"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_RelatedPerson"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Image_Attachment"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Diagnostic_ReportStatus_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Observation_Status_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Observation_Laboratory_Study_Value_SNOMED_CT"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Specimen_Condition"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Laboratory_Specialties_LOINC"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Localisation_Body_Structure_SNOMED_CT"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Secondary_Status"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_ObservationInterpretationCodes_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_DataAbsentReason_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Presence_Ordinal_SNOMED_CT_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Laterality_Body_Structure_SNOMED_CT"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_mio42"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Laboratory_Analyzer_SNOMED_CT"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_RequestPriority_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_AdministrativeGender_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_MIME_Types"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Specimen_Condition_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_SpecimenStatus_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_CommonUCUMCodesForDuration_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_CommonLanguages_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Test_Panel_LOINC"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Hl7VSRelevantClincialInformation_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_QuantityComparator_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Specimen_Type_SNOMED_CT"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Laterality_Body_Structure_SNOMED_CT_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Secondary_Status"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_LAB_Overview"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_ContactPointSystem_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_SexParameterForClinicalUse_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Laboratory_Identificator"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Body_Structures_SNOMED_CT"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_DeviceNameType_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_MIME_Types_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Specimen_Collection_Method_SNOMED_CT"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Result_Interpretation_SNOMED_CT"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Diagnostic_ReportStatus"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_ObservationReferenceRangeMeaningCodes_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Observation_Status"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_PatientRelationshipType_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Localisation_Body_Structure_SNOMED_CT_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Bodystructure_Body_Landmark_Clock_Face_Position"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Bodystructure_Body_Landmark_Clock_Face_Position_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_EHDSIReferenceRangeAppliesTo_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Extracorporal_Device_SNOMED_CT"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Extracorporal_Device_SNOMED_CT_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Identifier_Type"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Identifier_Type_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_LabSpecimenAdditiveEu_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_SpecimenProcessingProcedure_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Type_Diagram"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Type_Diagram_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DiagnosticReport_Media_Link"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_EHDSIReferenceRangeAppliesTo"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Observation_Methods"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "KBV_CS_MIO_LAB_Marital_Status_Codes_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Marital_Status_Codes_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_ContactEntityType_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Data_Absent_Reason_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Test_Profil_Laboruntersuchungsgruppe"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Laboruntersuchungsgruppe"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Data_Absent_Reason"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Provenance_Activity_Type_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "BodyStructure/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "Bundle/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "Composition/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "Condition/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "Device/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "DeviceDefinition/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "DiagnosticReport/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "DocumentReference/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "Observation/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "Organization/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "Patient/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "Practitioner/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "PractitionerRole/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "Provenance/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "Specimen/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "ServiceRequest/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "Substance/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "RelatedPerson/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "path-expansion-params"
      },
      {
        "url" : "value",
        "valueString" : "../../input/expansion_parameters/expansion_parameter.json"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "usage-stats-opt-out"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "pin-canonicals"
      },
      {
        "url" : "value",
        "valueString" : "pin-multiples"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "autoload-resources"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "path-liquid"
      },
      {
        "url" : "value",
        "valueString" : "template/liquid"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "path-liquid"
      },
      {
        "url" : "value",
        "valueString" : "input/liquid"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "path-qa"
      },
      {
        "url" : "value",
        "valueString" : "temp/qa"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "path-temp"
      },
      {
        "url" : "value",
        "valueString" : "temp/pages"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "path-output"
      },
      {
        "url" : "value",
        "valueString" : "output"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "path-suppressed-warnings"
      },
      {
        "url" : "value",
        "valueString" : "input/ignoreWarnings.txt"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "path-history"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/history.html"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "template-html"
      },
      {
        "url" : "value",
        "valueString" : "template-page.html"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "template-md"
      },
      {
        "url" : "value",
        "valueString" : "template-page-md.html"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "apply-contact"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "apply-context"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "apply-copyright"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "apply-jurisdiction"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "apply-license"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "apply-publisher"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "apply-version"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "apply-wg"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "active-tables"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "fmm-definition"
      },
      {
        "url" : "value",
        "valueString" : "http://hl7.org/fhir/versions.html#maturity"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "propagate-status"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "excludelogbinaryformat"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueString" : "tabbed-snapshots"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/expansion-parameters",
      "valueReference" : {
        "reference" : "Parameters/expansion-parameters"
      }
    },
    {
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-internal-dependency",
      "valueCode" : "hl7.fhir.uv.tools.r4#1.1.2"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "copyrightyear"
      },
      {
        "url" : "value",
        "valueString" : "2020+"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "releaselabel"
      },
      {
        "url" : "value",
        "valueString" : "ci-build"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "no-usage-check"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "excludettl"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "bundle-references-resolve"
      },
      {
        "url" : "value",
        "valueString" : "false"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DeviceDefinition_Specimen_Container"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Critical_Result"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Secondary_Specimen"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Device_Specimen_Container"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Sorting_Number"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Secondary_Status"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Specimen"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Practitioner"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ImplementationGuide/kbv-mio-laborbefund"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Source_Reference_Range"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Laboratory_Study_Group"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_PractitionerRole"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_zlog"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DiagnosticReport"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_ServiceRequest"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Device"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Organization"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Patient"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Extracorporeal_Source"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_External_Service"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Order_Entry_Time"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Association_Service"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Diskriminator"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_BodyStructure"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Substance"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Provenance"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_No_Linear_Reference_Range"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Device_Laboratory_Analyzer"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Device_Specimen_Subject"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DeviceDefinition_Laboratory_Analyzer"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DeviceDefinition_Specimen_Subject"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Composition"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Bundle"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DocumentReference"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Reason_Type"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Condition_Diagnosis"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Laboratory_Study"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Pseudonymized_Report"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Accredited_Service"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_LAB_Alternative_Result"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_RelatedPerson"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Image_Attachment"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Diagnostic_ReportStatus_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Observation_Status_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Observation_Laboratory_Study_Value_SNOMED_CT"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Specimen_Condition"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Laboratory_Specialties_LOINC"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Localisation_Body_Structure_SNOMED_CT"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Secondary_Status"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_ObservationInterpretationCodes_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_DataAbsentReason_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Presence_Ordinal_SNOMED_CT_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Laterality_Body_Structure_SNOMED_CT"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_mio42"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Laboratory_Analyzer_SNOMED_CT"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_RequestPriority_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_AdministrativeGender_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_MIME_Types"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Specimen_Condition_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_SpecimenStatus_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_CommonUCUMCodesForDuration_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_CommonLanguages_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Test_Panel_LOINC"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Hl7VSRelevantClincialInformation_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_QuantityComparator_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Specimen_Type_SNOMED_CT"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Laterality_Body_Structure_SNOMED_CT_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Secondary_Status"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ConceptMap/KBV_CM_MIO_LAB_Overview"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_ContactPointSystem_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_SexParameterForClinicalUse_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Laboratory_Identificator"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Body_Structures_SNOMED_CT"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_DeviceNameType_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_MIME_Types_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Specimen_Collection_Method_SNOMED_CT"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Result_Interpretation_SNOMED_CT"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Diagnostic_ReportStatus"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_ObservationReferenceRangeMeaningCodes_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Observation_Status"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_PatientRelationshipType_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Localisation_Body_Structure_SNOMED_CT_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Bodystructure_Body_Landmark_Clock_Face_Position"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Bodystructure_Body_Landmark_Clock_Face_Position_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_EHDSIReferenceRangeAppliesTo_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Extracorporal_Device_SNOMED_CT"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Extracorporal_Device_SNOMED_CT_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Identifier_Type"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Identifier_Type_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_LabSpecimenAdditiveEu_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_SpecimenProcessingProcedure_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Type_Diagram"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Type_Diagram_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DiagnosticReport_Media_Link"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_EHDSIReferenceRangeAppliesTo"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Observation_Methods"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "KBV_CS_MIO_LAB_Marital_Status_Codes_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Marital_Status_Codes_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_ContactEntityType_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Data_Absent_Reason_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Test_Profil_Laboruntersuchungsgruppe"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Laboruntersuchungsgruppe"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/ValueSet/KBV_VS_MIO_LAB_Data_Absent_Reason"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "special-url"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_LAB_Provenance_Activity_Type_German"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "BodyStructure/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "Bundle/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "Composition/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "Condition/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "Device/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "DeviceDefinition/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "DiagnosticReport/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "DocumentReference/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "Observation/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "Organization/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "Patient/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "Practitioner/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "PractitionerRole/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "Provenance/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "Specimen/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "ServiceRequest/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "Substance/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "no-narrative"
      },
      {
        "url" : "value",
        "valueString" : "RelatedPerson/*"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-expansion-params"
      },
      {
        "url" : "value",
        "valueString" : "../../input/expansion_parameters/expansion_parameter.json"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "usage-stats-opt-out"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "pin-canonicals"
      },
      {
        "url" : "value",
        "valueString" : "pin-multiples"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "autoload-resources"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-liquid"
      },
      {
        "url" : "value",
        "valueString" : "template/liquid"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-liquid"
      },
      {
        "url" : "value",
        "valueString" : "input/liquid"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-qa"
      },
      {
        "url" : "value",
        "valueString" : "temp/qa"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-temp"
      },
      {
        "url" : "value",
        "valueString" : "temp/pages"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-output"
      },
      {
        "url" : "value",
        "valueString" : "output"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-suppressed-warnings"
      },
      {
        "url" : "value",
        "valueString" : "input/ignoreWarnings.txt"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "path-history"
      },
      {
        "url" : "value",
        "valueString" : "https://fhir.kbv.de/history.html"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "template-html"
      },
      {
        "url" : "value",
        "valueString" : "template-page.html"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "template-md"
      },
      {
        "url" : "value",
        "valueString" : "template-page-md.html"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-contact"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-context"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-copyright"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-jurisdiction"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-license"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-publisher"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-version"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "apply-wg"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "active-tables"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "fmm-definition"
      },
      {
        "url" : "value",
        "valueString" : "http://hl7.org/fhir/versions.html#maturity"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "propagate-status"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "excludelogbinaryformat"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    },
    {
      "extension" : [{
        "url" : "code",
        "valueCode" : "tabbed-snapshots"
      },
      {
        "url" : "value",
        "valueString" : "true"
      }],
      "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-parameter"
    }],
    "resource" : [{
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "DeviceDefinition"
      }],
      "reference" : {
        "reference" : "DeviceDefinition/01021964-005b-4dd5-975d-2e9a9fa917d9"
      },
      "name" : "01021964-005b-4dd5-975d-2e9a9fa917d9",
      "description" : "Minimale Beispielinstanz für das Profil KBV_PR_MIO_LAB_DeviceDefinition_Specimen_Container",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DeviceDefinition_Specimen_Container"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ServiceRequest"
      }],
      "reference" : {
        "reference" : "ServiceRequest/01a21c9c-2cd1-44e5-a999-f84d9ef70605"
      },
      "name" : "01a21c9c-2cd1-44e5-a999-f84d9ef70605",
      "description" : "Maximale Beispielinstanz für das Profil KBV_PR_MIO_LAB_ServiceRequest",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_ServiceRequest"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Observation"
      }],
      "reference" : {
        "reference" : "Observation/035761c3-8934-499f-bf34-3963979afb56"
      },
      "name" : "035761c3-8934-499f-bf34-3963979afb56",
      "description" : "Maximale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Observation_Laboratory_Study",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Laboratory_Study"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Device"
      }],
      "reference" : {
        "reference" : "Device/05146497-2ca3-488e-96cb-c27c77ab6a3c"
      },
      "name" : "05146497-2ca3-488e-96cb-c27c77ab6a3c",
      "description" : "Maximale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Device_Specimen_Container",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Device_Specimen_Container"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Observation"
      }],
      "reference" : {
        "reference" : "Observation/0cfe903c-5061-4441-bf5d-1f35c4283c19"
      },
      "name" : "0cfe903c-5061-4441-bf5d-1f35c4283c19",
      "description" : "Minimale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Observation_Image_Attachment",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Image_Attachment"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "RelatedPerson"
      }],
      "reference" : {
        "reference" : "RelatedPerson/0f9878cf-8297-43c1-bf2d-7de5da068bf6"
      },
      "name" : "0f9878cf-8297-43c1-bf2d-7de5da068bf6",
      "description" : "Minimale Beispielinstanz für das Profil KBV_PR_MIO_LAB_RelatedPerson",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_RelatedPerson"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Device"
      }],
      "reference" : {
        "reference" : "Device/18a30aa6-3b2d-4738-9ca9-125a452d14e0"
      },
      "name" : "18a30aa6-3b2d-4738-9ca9-125a452d14e0",
      "description" : "Maximale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Device_Laboratory_Analyzer",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Device_Laboratory_Analyzer"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Device"
      }],
      "reference" : {
        "reference" : "Device/1ba291b4-78b5-4bf9-92f7-50f2f3c94cf5"
      },
      "name" : "1ba291b4-78b5-4bf9-92f7-50f2f3c94cf5",
      "description" : "Minimale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Device_Specimen_Container",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Device_Specimen_Container"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Condition"
      }],
      "reference" : {
        "reference" : "Condition/1d344181-abf0-428d-9f3f-1bbd84b7684e"
      },
      "name" : "1d344181-abf0-428d-9f3f-1bbd84b7684e",
      "description" : "Maximale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Condition_Diagnosis",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Condition_Diagnosis"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Organization"
      }],
      "reference" : {
        "reference" : "Organization/2110eb93-f57f-4f17-8e80-b76bc98d2c6a"
      },
      "name" : "2110eb93-f57f-4f17-8e80-b76bc98d2c6a",
      "description" : "Minimale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Organization",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Organization"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Practitioner"
      }],
      "reference" : {
        "reference" : "Practitioner/24435567-fed3-43f8-8fc8-954f68df7fce"
      },
      "name" : "24435567-fed3-43f8-8fc8-954f68df7fce",
      "description" : "Minimale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Practitioner",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Practitioner"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "DeviceDefinition"
      }],
      "reference" : {
        "reference" : "DeviceDefinition/25068c1f-a497-4cfe-b4e7-4a7026adf1e6"
      },
      "name" : "25068c1f-a497-4cfe-b4e7-4a7026adf1e6",
      "description" : "Maximale Beispielinstanz für das Profil KBV_PR_MIO_LAB_DeviceDefinition_Laboratory_Analyzer",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DeviceDefinition_Laboratory_Analyzer"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Practitioner"
      }],
      "reference" : {
        "reference" : "Practitioner/2b946366-cf18-4d89-a29c-00bf69ac90f6"
      },
      "name" : "2b946366-cf18-4d89-a29c-00bf69ac90f6",
      "description" : "Maximale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Practitioner",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Practitioner"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "DeviceDefinition"
      }],
      "reference" : {
        "reference" : "DeviceDefinition/30a47ba7-8975-4383-ad43-61c032c30e53"
      },
      "name" : "30a47ba7-8975-4383-ad43-61c032c30e53",
      "description" : "Maximale Beispielinstanz für das Profil KBV_PR_MIO_LAB_DeviceDefinition_Specimen_Container",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DeviceDefinition_Specimen_Container"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "DiagnosticReport"
      }],
      "reference" : {
        "reference" : "DiagnosticReport/3604d5a6-798e-4615-8a22-1d280638e2c0"
      },
      "name" : "3604d5a6-798e-4615-8a22-1d280638e2c0",
      "description" : "Maximale Beispielinstanz für das Profil KBV_PR_MIO_LAB_DiagnosticReport",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DiagnosticReport"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Substance"
      }],
      "reference" : {
        "reference" : "Substance/4153de68-1124-4c02-a8a3-98f4c312f075"
      },
      "name" : "4153de68-1124-4c02-a8a3-98f4c312f075",
      "description" : "Minimale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Substance",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Substance"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "DeviceDefinition"
      }],
      "reference" : {
        "reference" : "DeviceDefinition/430a63d5-b9ed-469b-a3a1-7aae27f27b11"
      },
      "name" : "430a63d5-b9ed-469b-a3a1-7aae27f27b11",
      "description" : "Minimale Beispielinstanz für das Profil KBV_PR_MIO_LAB_DeviceDefinition_Specimen_Subject",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DeviceDefinition_Specimen_Subject"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Specimen"
      }],
      "reference" : {
        "reference" : "Specimen/4f47fe9c-d92e-46f4-ad6d-85740aaa467b"
      },
      "name" : "4f47fe9c-d92e-46f4-ad6d-85740aaa467b",
      "description" : "Maximale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Specimen",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Specimen"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Observation"
      }],
      "reference" : {
        "reference" : "Observation/51b6129a-b68c-485d-a37b-9593fee4354f"
      },
      "name" : "51b6129a-b68c-485d-a37b-9593fee4354f",
      "description" : "Maximale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Observation_Laboratory_Study_Group",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Laboratory_Study_Group"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Provenance"
      }],
      "reference" : {
        "reference" : "Provenance/5f40f9f7-4474-4080-bb31-a314d1cda038"
      },
      "name" : "5f40f9f7-4474-4080-bb31-a314d1cda038",
      "description" : "Maximale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Provenance",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Provenance"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "BodyStructure"
      }],
      "reference" : {
        "reference" : "BodyStructure/6894b106-8a91-4cfb-9826-443aed21c98b"
      },
      "name" : "6894b106-8a91-4cfb-9826-443aed21c98b",
      "description" : "Maximale Beispielinstanz für das Profil KBV_PR_MIO_LAB_BodyStructure",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_BodyStructure"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Observation"
      }],
      "reference" : {
        "reference" : "Observation/6a2a44c6-92f8-40cf-a0bc-673404f7ac9b"
      },
      "name" : "6a2a44c6-92f8-40cf-a0bc-673404f7ac9b",
      "description" : "Maximale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Observation_Laboratory_Study",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Laboratory_Study"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "BodyStructure"
      }],
      "reference" : {
        "reference" : "BodyStructure/72f65586-b2b5-465f-a792-89fb7545d7bc"
      },
      "name" : "72f65586-b2b5-465f-a792-89fb7545d7bc",
      "description" : "Minimale Beispielinstanz für das Profil KBV_PR_MIO_LAB_BodyStructure",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_BodyStructure"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Observation"
      }],
      "reference" : {
        "reference" : "Observation/76fdc299-7b3f-404a-b32e-31e416bb0c32"
      },
      "name" : "76fdc299-7b3f-404a-b32e-31e416bb0c32",
      "description" : "Minimale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Observation_Laboratory_Study_Group",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Laboratory_Study_Group"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "RelatedPerson"
      }],
      "reference" : {
        "reference" : "RelatedPerson/778e032a-723a-4f3e-915f-ffbc5488b369"
      },
      "name" : "778e032a-723a-4f3e-915f-ffbc5488b369",
      "description" : "Maximale Beispielinstanz für das Profil KBV_PR_MIO_LAB_RelatedPerson",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_RelatedPerson"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Observation"
      }],
      "reference" : {
        "reference" : "Observation/7813a2dc-36aa-41ce-b5f5-f338e944b5e9"
      },
      "name" : "7813a2dc-36aa-41ce-b5f5-f338e944b5e9",
      "description" : "Maximale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Observation_Image_Attachment",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Image_Attachment"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "DeviceDefinition"
      }],
      "reference" : {
        "reference" : "DeviceDefinition/8157f177-3f3e-46b4-be27-efcbf7a216be"
      },
      "name" : "8157f177-3f3e-46b4-be27-efcbf7a216be",
      "description" : "Minimale Beispielinstanz für das Profil KBV_PR_MIO_LAB_DeviceDefinition_Laboratory_Analyzer",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DeviceDefinition_Laboratory_Analyzer"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "DeviceDefinition"
      }],
      "reference" : {
        "reference" : "DeviceDefinition/81840764-fb77-49e6-9a7b-5cb028d29895"
      },
      "name" : "81840764-fb77-49e6-9a7b-5cb028d29895",
      "description" : "Maximale Beispielinstanz für das Profil KBV_PR_MIO_LAB_DeviceDefinition_Specimen_Subject",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DeviceDefinition_Specimen_Subject"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Patient"
      }],
      "reference" : {
        "reference" : "Patient/84e01fa5-6763-4a96-99f3-170cf9b317ff"
      },
      "name" : "84e01fa5-6763-4a96-99f3-170cf9b317ff",
      "description" : "Minimale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Patient",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Patient"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Observation"
      }],
      "reference" : {
        "reference" : "Observation/96f33ca8-872d-4c8b-972e-b681db27d9df"
      },
      "name" : "96f33ca8-872d-4c8b-972e-b681db27d9df",
      "description" : "Minimale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Observation_Laboratory_Study",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Laboratory_Study"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Condition"
      }],
      "reference" : {
        "reference" : "Condition/988426e1-b7df-44b2-881c-09e7cf482b72"
      },
      "name" : "988426e1-b7df-44b2-881c-09e7cf482b72",
      "description" : "Minimale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Condition_Diagnosis",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Condition_Diagnosis"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "PractitionerRole"
      }],
      "reference" : {
        "reference" : "PractitionerRole/a424d6c6-de52-443e-a9b2-5240d3b9401a"
      },
      "name" : "a424d6c6-de52-443e-a9b2-5240d3b9401a",
      "description" : "Maximale Beispielinstanz für das Profil KBV_PR_MIO_LAB_PractitionerRole",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_PractitionerRole"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Substance"
      }],
      "reference" : {
        "reference" : "Substance/a4b533d4-0a3c-4701-b411-fd9666bf3d03"
      },
      "name" : "a4b533d4-0a3c-4701-b411-fd9666bf3d03",
      "description" : "Maximale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Substance",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Substance"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "DiagnosticReport"
      }],
      "reference" : {
        "reference" : "DiagnosticReport/a6f3d3de-0857-45ed-916e-087d84391bc3"
      },
      "name" : "a6f3d3de-0857-45ed-916e-087d84391bc3",
      "description" : "Minimale Beispielinstanz für das Profil KBV_PR_MIO_LAB_DiagnosticReport",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DiagnosticReport"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-AdministrativeGender-German"
      },
      "name" : "AdministrativeGender German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für AdministrativeGender German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      }],
      "reference" : {
        "reference" : "ValueSet/KBV-VS-MIO-LAB-Extracorporal-Device-SNOMED-CT"
      },
      "name" : "Außerkörperliche Quellen SNOMED CT®",
      "description" : "Dieses Valueset enthält die Codes zur Beschreibung von Außerkörperliche Quellen SNOMED CT®.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-Extracorporal-Device-SNOMED-CT-German"
      },
      "name" : "Außerkörperliche Quellen SNOMED CT® German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für Außerkörperliche Quellen SNOMED CT® German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Organization"
      }],
      "reference" : {
        "reference" : "Organization/b1135775-9c67-4d2f-8618-9ef3d1f5f3d7"
      },
      "name" : "b1135775-9c67-4d2f-8618-9ef3d1f5f3d7",
      "description" : "Maximale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Organization",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Organization"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Patient"
      }],
      "reference" : {
        "reference" : "Patient/b65dfcca-c6ce-4dac-8742-8da00c192c7d"
      },
      "name" : "b65dfcca-c6ce-4dac-8742-8da00c192c7d",
      "description" : "Maximale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Patient",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Patient"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "PractitionerRole"
      }],
      "reference" : {
        "reference" : "PractitionerRole/bd9d76e7-9fa1-42a4-b364-f93845994612"
      },
      "name" : "bd9d76e7-9fa1-42a4-b364-f93845994612",
      "description" : "Minimale Beispielinstanz für das Profil KBV_PR_MIO_LAB_PractitionerRole",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_PractitionerRole"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-CommonLanguages-German"
      },
      "name" : "Bevorzugte Sprache German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für Bevorzugte Sprache German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      }],
      "reference" : {
        "reference" : "ValueSet/KBV-VS-MIO-LAB-Bodystructure-Body-Landmark-Clock-Face-Position"
      },
      "name" : "Bodystructure Clock Face Position SNOMED CT®",
      "description" : "Dieses Valueset enthält die Codes zur Beschreibung von Bodystructure Clock Face Position SNOMED CT®.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-Bodystructure-Body-Landmark-Clock-Face-Position-G"
      },
      "name" : "Bodystructure Clock Face Position SNOMED CT® German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für Bodystructure Clock Face Position SNOMED CT® German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Observation"
      }],
      "reference" : {
        "reference" : "Observation/c1b00183-b205-48a8-9d07-31fc8b6aa74e"
      },
      "name" : "c1b00183-b205-48a8-9d07-31fc8b6aa74e",
      "description" : "Maximale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Observation_Laboratory_Study",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Observation_Laboratory_Study"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Device"
      }],
      "reference" : {
        "reference" : "Device/c46e7bfb-1ee3-4c6b-9ce2-204939133cc5"
      },
      "name" : "c46e7bfb-1ee3-4c6b-9ce2-204939133cc5",
      "description" : "Maximale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Device_Specimen_Subject",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Device_Specimen_Subject"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-CommonUCUMCodesForDuration-German"
      },
      "name" : "Common UCUM Codes for Duration German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für Common UCUM Codes for Duration German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-ContactEntityType-German"
      },
      "name" : "Contact entity type German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für Contact entity type German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-ContactPointSystem-German"
      },
      "name" : "ContactPointSystem German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für ContactPointSystem German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Device"
      }],
      "reference" : {
        "reference" : "Device/d057eafe-1927-4b09-936b-5cb61b4c7dc6"
      },
      "name" : "d057eafe-1927-4b09-936b-5cb61b4c7dc6",
      "description" : "Minimale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Device_Laboratory_Analyzer",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Device_Laboratory_Analyzer"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "DocumentReference"
      }],
      "reference" : {
        "reference" : "DocumentReference/d9e75f3f-3900-4183-a475-d4d3dc1d14cc"
      },
      "name" : "d9e75f3f-3900-4183-a475-d4d3dc1d14cc",
      "description" : "Maximale Beispielinstanz für das Profil KBV_PR_MIO_LAB_DocumentReference",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DocumentReference"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-DataAbsentReason-German"
      },
      "name" : "DataAbsentReason German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für DataAbsentReason German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      }],
      "reference" : {
        "reference" : "ValueSet/KBV-VS-MIO-LAB-MIME-Types"
      },
      "name" : "Dateiformat",
      "description" : "Dieses Valueset enthält die Codes zur Beschreibung von Dateiformat.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-DeviceNameType-German"
      },
      "name" : "DeviceNameType German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für DeviceNameType German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ServiceRequest"
      }],
      "reference" : {
        "reference" : "ServiceRequest/eb46f1a2-c4ad-4276-aaaa-aef507db618d"
      },
      "name" : "eb46f1a2-c4ad-4276-aaaa-aef507db618d",
      "description" : "Minimale Beispielinstanz für das Profil KBV_PR_MIO_LAB_ServiceRequest",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_ServiceRequest"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Specimen"
      }],
      "reference" : {
        "reference" : "Specimen/eb7fbea2-95bd-4618-b38d-ce69cde79726"
      },
      "name" : "eb7fbea2-95bd-4618-b38d-ce69cde79726",
      "description" : "Minimale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Specimen",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Specimen"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Provenance"
      }],
      "reference" : {
        "reference" : "Provenance/f3533f34-781a-4cb4-9926-19fc8479b3e3"
      },
      "name" : "f3533f34-781a-4cb4-9926-19fc8479b3e3",
      "description" : "Minimale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Provenance",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Provenance"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "DocumentReference"
      }],
      "reference" : {
        "reference" : "DocumentReference/f7dab433-b4b3-4908-8495-4876f0240511"
      },
      "name" : "f7dab433-b4b3-4908-8495-4876f0240511",
      "description" : "Minimale Beispielinstanz für das Profil KBV_PR_MIO_LAB_DocumentReference",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_DocumentReference"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Device"
      }],
      "reference" : {
        "reference" : "Device/ff1903f6-188a-4e60-b3bc-4b48d4582db8"
      },
      "name" : "ff1903f6-188a-4e60-b3bc-4b48d4582db8",
      "description" : "Minimale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Device_Specimen_Subject",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Device_Specimen_Subject"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-Hl7VSRelevantClincialInformation-German"
      },
      "name" : "hl7VS-relevantClincialInformation German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für hl7VS-relevantClincialInformation German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      }],
      "reference" : {
        "reference" : "ValueSet/KBV-VS-MIO-LAB-Identifier-Type"
      },
      "name" : "Identifier Type",
      "description" : "Dieses Valueset enthält die Codes zur Beschreibung von Identifier Type.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-Identifier-Type-German"
      },
      "name" : "Identifier Type German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für Identifier Type German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ConceptMap"
      }],
      "reference" : {
        "reference" : "ConceptMap/KBV-CM-MIO-LAB-Overview"
      },
      "name" : "KBV_CM_MIO_LAB_Overview",
      "description" : "Diese Conceptmap verknüpft die Codes für KBV_CM_MIO_LAB_Overview mit deutschen Bezeichnungen.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-Laboratory-Identificator"
      },
      "name" : "KBV_CS_MIO_LAB_Laboratory_Identificator",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für KBV_CS_MIO_LAB_Laboratory_Identificator.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-mio42"
      },
      "name" : "KBV_CS_MIO_LAB_mio42",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für KBV_CS_MIO_LAB_mio42.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-Secondary-Status"
      },
      "name" : "KBV_CS_MIO_LAB_Secondary_Status",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für KBV_CS_MIO_LAB_Secondary_Status.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-Test-Profil-Laboruntersuchungsgruppe"
      },
      "name" : "KBV_CS_MIO_LAB_Test_Profil_Laboruntersuchungsgruppe",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für KBV_CS_MIO_LAB_Test_Profil_Laboruntersuchungsgruppe.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-EX-MIO-LAB-Accredited-Service"
      },
      "name" : "KBV_EX_MIO_LAB_Accredited_Service",
      "description" : "Diese Extension bildet eine Kennzeichnung für akkreditierte Laboruntersuchungen ab.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-EX-MIO-LAB-Alternative-Result"
      },
      "name" : "KBV_EX_MIO_LAB_Alternative_Result",
      "description" : "Diese Extension bildet das Resultat einer Laboruntersuchung mit einer Alternativeinheit ab.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-EX-MIO-LAB-Association-Service"
      },
      "name" : "KBV_EX_MIO_LAB_Association_Service",
      "description" : "Diese Extension bildet eine Kennzeichnung für Verbundleistungen ab.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-EX-MIO-LAB-Critical-Result"
      },
      "name" : "KBV_EX_MIO_LAB_Critical_Result",
      "description" : "In dieser Extension kann ein, aus labormedizinischer Sicht, medizinisch kritischer Befund deklariert werden.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-EX-MIO-LAB-Diskriminator"
      },
      "name" : "KBV_EX_MIO_LAB_Diskriminator",
      "description" : "Diese Extension dient als Unterscheidungsmerkmal.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-EX-MIO-LAB-External-Service"
      },
      "name" : "KBV_EX_MIO_LAB_External_Service",
      "description" : "Diese Extension bildet eine Kennzeichnung für Fremdleistungen ab.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-EX-MIO-LAB-No-Linear-Reference-Range"
      },
      "name" : "KBV_EX_MIO_LAB_No_Linear_Reference_Range",
      "description" : "Diese Extension kennzeichnet, dass es sich um einen nicht-linearen Wertebereich handelt.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-EX-MIO-LAB-Order-Entry-Time"
      },
      "name" : "KBV_EX_MIO_LAB_Order_Entry_Time",
      "description" : "Diese Extension bildet einen Auftrageingangszeitpunkt ab.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-EX-MIO-LAB-Pseudonymized-Report"
      },
      "name" : "KBV_EX_MIO_LAB_Pseudonymized_Report",
      "description" : "In dieser Extension kann ein Laborbefund als pseudonymisiert deklariert werden. Es kann bei der Steuerung der Übermittlungswege und für technische Validierung genutzt werden.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-EX-MIO-LAB-Reason-Type"
      },
      "name" : "KBV_EX_MIO_LAB_Reason_Type",
      "description" : "Diese Extension dient der Unterscheidung zwischen Anlass und Veranlassungsgrund des Laborauftrags.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-EX-MIO-LAB-Secondary-Status"
      },
      "name" : "KBV_EX_MIO_LAB_Secondary_Status",
      "description" : "In dieser Extension kann eine optionale sekundäre Angabe des Änderungsstatus, zusätzlich zum Hauptstatus des Gesamtbefundes angegeben werden",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-EX-MIO-LAB-Sorting-Number"
      },
      "name" : "KBV_EX_MIO_LAB_Sorting_Number",
      "description" : "Diese Extension bildet eine Sortiernummer ab.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-EX-MIO-LAB-Source-Reference-Range"
      },
      "name" : "KBV_EX_MIO_LAB_Source_Reference_Range",
      "description" : "Diese Extension bildet eine Quelle der Richtgrenze ab.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:extension"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-EX-MIO-LAB-zlog"
      },
      "name" : "KBV_EX_MIO_LAB_zlog",
      "description" : "Diese Extension bildet den zlog-Wert ab.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-PR-MIO-LAB-BodyStructure"
      },
      "name" : "KBV_PR_MIO_LAB_BodyStructure",
      "description" : "Dieses Profil bildet eine Körperstruktur ab.\n\n\nAngaben zur Körperstruktur können enthalten:\n\n* Körperstelle (anatomische Benennung)\n* Lateralität (für paarige Organe/Strukturen: rechts, links, beidseits)\n* Lokalisierung (für räumliche Angaben, z.B. oben, unten)\n* Uhrzeigerposition (z.B. 12-Uhr-Position)\n* Morphologie (z.B. pathologische Strukturen)",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-PR-MIO-LAB-Bundle"
      },
      "name" : "KBV_PR_MIO_LAB_Bundle",
      "description" : "Dieses Profil dient als bündelndes Element. Das Bundle kann als Klammer-Ressource verstanden werden, die die notwendigen Ressourcen zusammenfügt. Diese Ressource und die darin gebündelten Ressourcen können dann mit einer Signatur versehen werden. Das Bundle umfasst in dieser Anwendung einen Laborbefund.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-PR-MIO-LAB-Composition"
      },
      "name" : "KBV_PR_MIO_LAB_Composition",
      "description" : "Dieses Profil bündelt die Strukturen, die zum gesamten Laborbefund gehören. Das MIO Laborbefund enthält genau einen Laborgesamtbefund, inklusive aller Befundanteile und Anhänge.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-PR-MIO-LAB-Condition-Diagnosis"
      },
      "name" : "KBV_PR_MIO_LAB_Condition_Diagnosis",
      "description" : "Hier wird eine Diagnose im Kontext des Laborauftrages abgebildet.\n\nIn den Angaben zum LDT-Mapping findet man Beispiele für Inhalte, die in diese Datenstruktur hineinpassen könnten bzw. auch übernommen werden könnten. Angaben zur Auftragsdiagnose können beispielsweise in Muster 10 vorkommen oder über den Labordatentransfer übermittelt werden.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-PR-MIO-LAB-DeviceDefinition-Laboratory-Analyzer"
      },
      "name" : "KBV_PR_MIO_LAB_DeviceDefinition_Laboratory_Analyzer",
      "description" : "Dieses Profil bildet das Modell eines Laboranalysegerätes ab.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-PR-MIO-LAB-DeviceDefinition-Specimen-Container"
      },
      "name" : "KBV_PR_MIO_LAB_DeviceDefinition_Specimen_Container",
      "description" : "Dieses Profil bildet das Modell eines Probenbehälters ab.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-PR-MIO-LAB-DeviceDefinition-Specimen-Subject"
      },
      "name" : "KBV_PR_MIO_LAB_DeviceDefinition_Specimen_Subject",
      "description" : "Dieses Profil bildet das Modell einer außerkörperlichen Stelle ab.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-PR-MIO-LAB-Device-Laboratory-Analyzer"
      },
      "name" : "KBV_PR_MIO_LAB_Device_Laboratory_Analyzer",
      "description" : "In diesem Profil werden Informationen zum Analysegerät angegeben, mit dem die Messung durchgeführt wird.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-PR-MIO-LAB-Device-Specimen-Container"
      },
      "name" : "KBV_PR_MIO_LAB_Device_Specimen_Container",
      "description" : "In diesem Profil werden Informationen zum Probenbehälter angegeben, z. B. Blutröhrchen, steriler Urinprobenbehälter.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-PR-MIO-LAB-Device-Specimen-Subject"
      },
      "name" : "KBV_PR_MIO_LAB_Device_Specimen_Subject",
      "description" : "Dieses Profil bildet eine außerkörperliche Quelle ab.\n\nFalls die Probe nicht unmittelbar aus dem menschlichen Körper direkt entnommen wird, sondern beispielsweise aus einem Sammelgefäß oder Katheter gewonnen wird, kann das einen Einfluss auf das Messergebnis haben. Für diesen Fall kann die (außerkörperliche) Quelle für die Probenentnahme benannt werden.\n\nEs wäre auch möglich, dass eine Probenentnahme aus mehreren außerkörperlichen Quellen gewonnen wird.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-PR-MIO-LAB-DiagnosticReport"
      },
      "name" : "KBV_PR_MIO_LAB_DiagnosticReport",
      "description" : "Profil für den Laborgesamtbefund (DiagnosticReport). Darin verschachtelt unter \"Ergebnisse\" (DiagnosticReport.result) ist die Referenz auf \"Untersuchungsgruppe\" (Observation_Laboratory_Study_Group), darin die Referenz auf \"Laboruntersuchung\" (Observation_Laboratory_Study), darin die Referenz auf \"Probe\" (Specimen).",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-PR-MIO-LAB-DocumentReference"
      },
      "name" : "KBV_PR_MIO_LAB_DocumentReference",
      "description" : "Hier werden zusätzliche Resultate, die nicht Teil des strukturierten MIO Laborbefundes sind, abgebildet.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-PR-MIO-LAB-Observation-Image-Attachment"
      },
      "name" : "KBV_PR_MIO_LAB_Observation_Image_Attachment",
      "description" : "Abbildung, die zu einer Laboruntersuchung oder einer Untersuchungsgruppe als Ergänzung mitgegeben wird. Beispielsweise kann die Ausprägung einer Elektrophorese-Kurve eine hilfreiche oder wichtige Zusatzinformation zu einer Erkrankung geben, die durch den quantitativen Ergebniswert allein nicht hinreichend erkennbar wird.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-PR-MIO-LAB-Observation-Laboratory-Study"
      },
      "name" : "KBV_PR_MIO_LAB_Observation_Laboratory_Study",
      "description" : "Dieses Profil bildet eine Laboruntersuchung ab.\n\nLaboruntersuchungen können als Messung oder als Berechnung erfolgen.\n\nEine Laboruntersuchung als Messung beschreibt die quantitative oder qualitative Untersuchung eines spezifischen Laborparameters in einem definierten Probenmaterial; z. B. die Untersuchung des Hämoglobin-(Hb-)Werts als Konzentration im Blut. Der Bezug zur Probe, anhand derer die Messung vorgenommen wurde, muss erkennbar sein.\n\nBerechnete Laborergebnisse können auf Messungen basieren, z.B. kann die berechnete GFR (glomeruläre Filtrationsrate) auf einem gemessenen Kreatinin-Wert im Serum basieren.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-PR-MIO-LAB-Observation-Laboratory-Study-Group"
      },
      "name" : "KBV_PR_MIO_LAB_Observation_Laboratory_Study_Group",
      "description" : "Dieses Profil bildet eine Untersuchungsgruppe ab.\n\nUntersuchungsgruppen sind ein technisches Mittel, um fachlich zusammengehörige Laborergebnisse innerhalb des Laborgesamtbefundes gruppiert und sortiert anzuordnen. Die Struktur \"Laborgesamtbefund/Ergebnisse\" enthält mindestens eine Struktur \"Untersuchungsgruppe\" im Abschnitt Ergebnisse.\n\nFür die gruppierte Darstellung von Laboruntersuchungen können (optional) aus den fachlichen Gruppierungsmerkmalen fachliche Bezeichner als Gruppenüberschrift abgeleitet werden.\n\nUntersuchungsgruppen, deren Sortierreihenfolge und die Sortierreihenfolge der einzelnen Untersuchungen innerhalb einer Gruppe werden Labor-intern definiert. Das empfangende System muss diese Gruppierungen und Sortierungen interpretieren können. Diese Strukturierung dient dem Erhalt des fachlichen Kontextes von digital kommunizierten Laboruntersuchungen.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-PR-MIO-LAB-Organization"
      },
      "name" : "KBV_PR_MIO_LAB_Organization",
      "description" : "Dieses Profil bildet eine Einrichtung ab.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-PR-MIO-LAB-Patient"
      },
      "name" : "KBV_PR_MIO_LAB_Patient",
      "description" : "Dieses Profil bildet eine Person ab, die eine oder mehrere medizinische Leistungen in Anspruch nimmt.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-PR-MIO-LAB-Practitioner"
      },
      "name" : "KBV_PR_MIO_LAB_Practitioner",
      "description" : "Dieses Profil bildet eine behandelnde Person ab.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-PR-MIO-LAB-PractitionerRole"
      },
      "name" : "KBV_PR_MIO_LAB_PractitionerRole",
      "description" : "Dieses Profil bildet eine behandelnde Person/Einrichtung ab.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-PR-MIO-LAB-Provenance"
      },
      "name" : "KBV_PR_MIO_LAB_Provenance",
      "description" : "Hier werden Angaben zur medizinischen Freigabe der Laboruntersuchung gemacht. Das beinhaltet die Angabe der freigebenden Person, des Zeitpunktes und der Typisierung der Freigabe.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-PR-MIO-LAB-RelatedPerson"
      },
      "name" : "KBV_PR_MIO_LAB_RelatedPerson",
      "description" : "Dieses Profil bildet eine Kontakt- oder Bezugsperson ab.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-PR-MIO-LAB-ServiceRequest"
      },
      "name" : "KBV_PR_MIO_LAB_ServiceRequest",
      "description" : "Administrative und für die Befundung klinisch relevante Teilinformationen aus dem Laborauftrag",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-PR-MIO-LAB-Specimen"
      },
      "name" : "KBV_PR_MIO_LAB_Specimen",
      "description" : "Dieses Profil bildet eine Probe ab.\n\nIdentifizierung und Eigenschaften der primären oder sekundären Probe, auf deren Basis die Laboruntersuchung als Messung durchgeführt wird. Ein inhaltliches Beispiel für die Unterscheidung von Primär- und Sekundärprobe:\n\n* Primärprobe: Probenart = Vollblut (über LOINC® oder ergänzende Spezifizierung Probenart); Probengewinnung / Methode = Blutabnahme; Probenverarbeitung / Methode = Zentrifugieren\n\n* Sekundärprobe: Probenart = Serum (über LOINC® oder ergänzende Spezifizierung Probenart); Probengewinnung / Methode = Zentrifugieren zur Serumgewinnung; Probe / Ausgangsmaterial = Vollblut",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "StructureDefinition:resource"
      }],
      "reference" : {
        "reference" : "StructureDefinition/KBV-PR-MIO-LAB-Substance"
      },
      "name" : "KBV_PR_MIO_LAB_Substance",
      "description" : "Hier wird eine Substanz abgebildet, die bei der Probenverarbeitung als Zusatz hinzugefügt wird.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      }],
      "reference" : {
        "reference" : "ValueSet/KBV-VS-MIO-LAB-EHDSIReferenceRangeAppliesTo"
      },
      "name" : "Kollektivbezug",
      "description" : "Dieses Valueset enthält die Codes zur Beschreibung von Kollektivbezug.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-EHDSIReferenceRangeAppliesTo-German"
      },
      "name" : "Kollektivbezug German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für Kollektivbezug German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      }],
      "reference" : {
        "reference" : "ValueSet/KBV-VS-MIO-LAB-Body-Structures-SNOMED-CT"
      },
      "name" : "Körperstelle SNOMED CT®",
      "description" : "Dieses Valueset enthält die Codes zur Beschreibung von Körperstelle SNOMED CT®.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      }],
      "reference" : {
        "reference" : "ValueSet/KBV-VS-MIO-LAB-Laboratory-Analyzer-SNOMED-CT"
      },
      "name" : "Laboranalysegerät SNOMED CT®",
      "description" : "Dieses Valueset enthält die Codes zur Beschreibung von Laboranalysegerät SNOMED CT®.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Composition"
      }],
      "reference" : {
        "reference" : "Composition/cdfb127b-df3c-493f-bc7e-e8be4a7bdc45"
      },
      "name" : "Laboratory Report",
      "description" : "Maximale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Composition",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Composition"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "Composition"
      }],
      "reference" : {
        "reference" : "Composition/13c807c0-53e7-488e-84bb-023376563cf3"
      },
      "name" : "Laboratory Report",
      "description" : "Minimale Beispielinstanz für das Profil KBV_PR_MIO_LAB_Composition",
      "exampleCanonical" : "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_LAB_Composition"
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      }],
      "reference" : {
        "reference" : "ValueSet/KBV-VS-MIO-LAB-Laboratory-Specialties-LOINC"
      },
      "name" : "Laborbereich LOINC®",
      "description" : "Dieses Valueset enthält die Codes zur Beschreibung von Laborbereich LOINC®.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      }],
      "reference" : {
        "reference" : "ValueSet/KBV-VS-MIO-LAB-Laterality-Body-Structure-SNOMED-CT"
      },
      "name" : "Lateralität Körperstelle SNOMED CT®",
      "description" : "Dieses Valueset enthält die Codes zur Beschreibung von Lateralität Körperstelle SNOMED CT®.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      }],
      "reference" : {
        "reference" : "ValueSet/KBV-VS-MIO-LAB-Localisation-Body-Structure-SNOMED-CT"
      },
      "name" : "Lokalisation innerhalb Körperstelle SNOMED CT®",
      "description" : "Dieses Valueset enthält die Codes zur Beschreibung von Lokalisation innerhalb Körperstelle SNOMED CT®.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-Localisation-Body-Structure-SNOMED-CT-German"
      },
      "name" : "Lokalisation innerhalb Körperstelle SNOMED CT® German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für Lokalisation innerhalb Körperstelle SNOMED CT® German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-Marital-Status-Codes-German"
      },
      "name" : "MaritalStatus German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für MaritalStatus German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      }],
      "reference" : {
        "reference" : "ValueSet/KBV-VS-MIO-LAB-Observation-Laboratory-Study-Value-SNOMED-CT"
      },
      "name" : "Messergebnis Qualitativ SNOMED CT®",
      "description" : "Dieses Valueset enthält die Codes zur Beschreibung von Messergebnis Qualitativ SNOMED CT®.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      }],
      "reference" : {
        "reference" : "ValueSet/KBV-VS-MIO-LAB-Data-Absent-Reason"
      },
      "name" : "Nichtvorhandensein LOINC®",
      "description" : "Dieses Valueset enthält die Codes zur Beschreibung von Nichtvorhandensein LOINC®.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-Data-Absent-Reason-German"
      },
      "name" : "Nichtvorhandensein LOINC® German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für Nichtvorhandensein LOINC® German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-ObservationInterpretationCodes-German"
      },
      "name" : "Observation Interpretation Codes German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für Observation Interpretation Codes German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-ObservationReferenceRangeMeaningCodes-German"
      },
      "name" : "Observation Reference Range Meaning Codes German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für Observation Reference Range Meaning Codes German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-PatientRelationshipType-German"
      },
      "name" : "PatientRelationshipType German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für PatientRelationshipType German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      }],
      "reference" : {
        "reference" : "ValueSet/KBV-VS-MIO-LAB-Specimen-Type-SNOMED-CT"
      },
      "name" : "Probenart SNOMED CT®",
      "description" : "Dieses Valueset enthält die Codes zur Beschreibung von Probenart SNOMED CT®.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      }],
      "reference" : {
        "reference" : "ValueSet/KBV-VS-MIO-LAB-Specimen-Collection-Method-SNOMED-CT"
      },
      "name" : "Probenentnahme-Methode SNOMED CT®",
      "description" : "Dieses Valueset enthält die Codes zur Beschreibung von Probenentnahme-Methode SNOMED CT®.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-QuantityComparator-German"
      },
      "name" : "QuantityComparator German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für QuantityComparator German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-RequestPriority-German"
      },
      "name" : "Request priority German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für Request priority German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      }],
      "reference" : {
        "reference" : "ValueSet/KBV-VS-MIO-LAB-Secondary-Status"
      },
      "name" : "Sekundärstatus Gesamtbefund",
      "description" : "Dieses Valueset enthält die Codes zur Beschreibung von Sekundärstatus Gesamtbefund.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-SexParameterForClinicalUse-German"
      },
      "name" : "Sex Parameter for Clinical Use German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für Sex Parameter for Clinical Use German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-LabSpecimenAdditiveEu-German"
      },
      "name" : "Specimen Additive German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für Specimen Additive German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-SpecimenProcessingProcedure-German"
      },
      "name" : "Specimen processing procedure German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für Specimen processing procedure German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-SpecimenStatus-German"
      },
      "name" : "SpecimenStatus German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für SpecimenStatus German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      }],
      "reference" : {
        "reference" : "ValueSet/KBV-VS-MIO-LAB-Diagnostic-ReportStatus"
      },
      "name" : "Status Gesamtbefund",
      "description" : "Dieses Valueset enthält die Codes zur Beschreibung von Status Gesamtbefund.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-Diagnostic-ReportStatus-German"
      },
      "name" : "Status Gesamtbefund German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für Status Gesamtbefund German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      }],
      "reference" : {
        "reference" : "ValueSet/KBV-VS-MIO-LAB-Observation-Status"
      },
      "name" : "Status Laboruntersuchung",
      "description" : "Dieses Valueset enthält die Codes zur Beschreibung von Status Laboruntersuchung.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-Observation-Status-German"
      },
      "name" : "Status Laboruntersuchung German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für Status Laboruntersuchung German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      }],
      "reference" : {
        "reference" : "ValueSet/KBV-VS-MIO-LAB-Laboruntersuchungsgruppe"
      },
      "name" : "Test-Profil Laboruntersuchungsgruppe",
      "description" : "Dieses Valueset enthält die Codes zur Beschreibung von Test-Profil Laboruntersuchungsgruppe.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-Provenance-Activity-Type-German"
      },
      "name" : "Typisierung Freigabe German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für Typisierung Freigabe German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      }],
      "reference" : {
        "reference" : "ValueSet/KBV-VS-MIO-LAB-Type-Diagram"
      },
      "name" : "Typisierung Messdiagramm",
      "description" : "Dieses Valueset enthält die Codes zur Beschreibung von Typisierung Messdiagramm.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-Type-Diagram-German"
      },
      "name" : "Typisierung Messdiagramm German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für Typisierung Messdiagramm German.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      }],
      "reference" : {
        "reference" : "ValueSet/KBV-VS-MIO-LAB-Observation-Methods"
      },
      "name" : "Untersuchungsmethode SNOMED CT®",
      "description" : "Dieses Valueset enthält die Codes zur Beschreibung von Untersuchungsmethode SNOMED CT®.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "ValueSet"
      }],
      "reference" : {
        "reference" : "ValueSet/KBV-VS-MIO-LAB-Specimen-Condition"
      },
      "name" : "Zustand Probe",
      "description" : "Dieses Valueset enthält die Codes zur Beschreibung von Zustand Probe.",
      "exampleBoolean" : false
    },
    {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/resource-information",
        "valueString" : "CodeSystem"
      }],
      "reference" : {
        "reference" : "CodeSystem/KBV-CS-MIO-LAB-Specimen-Condition-German"
      },
      "name" : "Zustand Probe German",
      "description" : "Dieses Codesystem enthält die Codes für deutsche Bezeichner für Zustand Probe German.",
      "exampleBoolean" : false
    }],
    "page" : {
      "extension" : [{
        "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
        "valueUrl" : "toc.html"
      }],
      "nameUrl" : "toc.html",
      "title" : "Table of Contents",
      "generation" : "html",
      "page" : [{
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "index.html"
        }],
        "nameUrl" : "index.html",
        "title" : "Projektübersicht",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "Fachliche_Einordnung_und_Nutzen.html"
        }],
        "nameUrl" : "Fachliche_Einordnung_und_Nutzen.html",
        "title" : "Fachliche Einordnung und Nutzen",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "Rechtlicher_Rahmen.html"
        }],
        "nameUrl" : "Rechtlicher_Rahmen.html",
        "title" : "Rechtlicher Rahmen",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "Stakeholder.html"
        }],
        "nameUrl" : "Stakeholder.html",
        "title" : "Stakeholder",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "Vorarbeiten.html"
        }],
        "nameUrl" : "Vorarbeiten.html",
        "title" : "Vorarbeiten",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "Prozessanalyse.html"
        }],
        "nameUrl" : "Prozessanalyse.html",
        "title" : "Prozessanalyse",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "Bedarfsanalyse.html"
        }],
        "nameUrl" : "Bedarfsanalyse.html",
        "title" : "Bedarfsanalyse",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "Grundlagen_zur_Terminologienutzung.html"
        }],
        "nameUrl" : "Grundlagen_zur_Terminologienutzung.html",
        "title" : "Grundlagen zur Terminologienutzung",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "Anwendungsfaelle.html"
        }],
        "nameUrl" : "Anwendungsfaelle.html",
        "title" : "Anwendungsfälle",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "infomodell.html"
        }],
        "nameUrl" : "infomodell.html",
        "title" : "Informationsmodell",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "UX-_UI-Ueberblick.html"
        }],
        "nameUrl" : "UX-_UI-Ueberblick.html",
        "title" : "UX-/UI-Überblick",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "Einzelbefunddarstellung_in_der_Primaersystemansicht.html"
        }],
        "nameUrl" : "Einzelbefunddarstellung_in_der_Primaersystemansicht.html",
        "title" : "Einzelbefunddarstellung in der Primärsystemansicht",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "Kumulativdarstellung_in_der_Primaersystemansicht.html"
        }],
        "nameUrl" : "Kumulativdarstellung_in_der_Primaersystemansicht.html",
        "title" : "Kumulativdarstellung in der Primärsystemansicht",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "Moegliche_Primaersysteminteraktionen_mit_der_ePA.html"
        }],
        "nameUrl" : "Moegliche_Primaersysteminteraktionen_mit_der_ePA.html",
        "title" : "Mögliche Primärsysteminteraktionen mit der ePA",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "artifacts.html"
        }],
        "nameUrl" : "artifacts.html",
        "title" : "FHIR-Artefakte",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "requirements.html"
        }],
        "nameUrl" : "requirements.html",
        "title" : "Umsetzungsanforderungen",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "expansion_parameters.html"
        }],
        "nameUrl" : "expansion_parameters.html",
        "title" : "Expansion Parameter",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "copyright.html"
        }],
        "nameUrl" : "copyright.html",
        "title" : "Copyright",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "Feedback.html"
        }],
        "nameUrl" : "Feedback.html",
        "title" : "Feedback",
        "generation" : "markdown"
      },
      {
        "extension" : [{
          "url" : "http://hl7.org/fhir/tools/StructureDefinition/ig-page-name",
          "valueUrl" : "downloads.html"
        }],
        "nameUrl" : "downloads.html",
        "title" : "Downloads",
        "generation" : "markdown"
      }]
    },
    "parameter" : [{
      "code" : "path-resource",
      "value" : "input/capabilities"
    },
    {
      "code" : "path-resource",
      "value" : "input/examples"
    },
    {
      "code" : "path-resource",
      "value" : "input/extensions"
    },
    {
      "code" : "path-resource",
      "value" : "input/models"
    },
    {
      "code" : "path-resource",
      "value" : "input/operations"
    },
    {
      "code" : "path-resource",
      "value" : "input/profiles"
    },
    {
      "code" : "path-resource",
      "value" : "input/resources"
    },
    {
      "code" : "path-resource",
      "value" : "input/vocabulary"
    },
    {
      "code" : "path-resource",
      "value" : "input/maps"
    },
    {
      "code" : "path-resource",
      "value" : "input/testing"
    },
    {
      "code" : "path-resource",
      "value" : "input/history"
    },
    {
      "code" : "path-resource",
      "value" : "fsh-generated/resources"
    },
    {
      "code" : "path-pages",
      "value" : "template/config"
    },
    {
      "code" : "path-pages",
      "value" : "input/images"
    },
    {
      "code" : "path-tx-cache",
      "value" : "input-cache/txcache"
    }]
  }
}

```

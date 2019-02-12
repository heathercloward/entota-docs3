---
id: version-1.0.0-Import_Fields_to_a_System
sidebar_label: Import Fields to a System
title: Import Fields to a System
original_id: Import_Fields_to_a_System
---

# Import Fields to a System

You can upload field metadata for a System in a zipped JSON file using
the upload option on the System detail page.

## Fields JSON Import File Format

Use the following schema information to format the JSON file that is
used to load field metadata for a System.

**Format:**

{

"version": "2018-02-07",

"fields":\[

{

"name": "...",

"location": {...},

"type": {..}

}

\]

}

 

You can request a sample JSON file by [submitting a request to
support](Contact_Support.md).

 

Properties in “root”:

<table>
<tbody>
<tr class="odd">
<td><p>Property</p></td>
<td><p>Description</p></td>
<td><p>Presence</p></td>
<td><p>Example 1</p></td>
</tr>
<tr class="even">
<td><p>version</p></td>
<td><p>Schema version as string</p></td>
<td><p>Must be present</p>
<p><strong>NOTE</strong>: This is a hard coded value that MUST be set to this exact string for this version of the API</p></td>
<td><p>“2018-02-07”</p></td>
</tr>
<tr class="odd">
<td><p>fields</p></td>
<td><p>Array of JSON object</p></td>
<td><p>Must be present</p>
<p><strong>NOTE</strong>: See properties below</p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

Properties in “fields” array:

<table>
<tbody>
<tr class="odd">
<td><p>Property</p></td>
<td><p>Description</p></td>
<td><p>Presence</p></td>
<td><p>Example 1</p></td>
</tr>
<tr class="even">
<td><p>name</p></td>
<td><p>The friendly name of the field.</p></td>
<td><p>Must be present</p>
<p><strong>NOTE</strong>: This is the Friendly Name that displays in the UI on the Data Set page.</p></td>
<td><p>Customer Name</p></td>
</tr>
<tr class="odd">
<td><p>location</p></td>
<td><p>The full system-specific path, location information for a field.  This is a JSON bag.</p></td>
<td><p>Must be present</p></td>
<td><p>JSON { … }</p>
<p>(see “location” table below)</p></td>
</tr>
<tr class="even">
<td><p>type</p></td>
<td><p>The full system-specific data type information for a field.  This is a JSON bag.</p></td>
<td><p>Must be present</p></td>
<td><p>JSON { … }</p>
<p>(see “type” table below)</p></td>
</tr>
<tr class="odd">
<td><p>tags</p></td>
<td><p>An array of terms that should be indexed along with this field for search.</p></td>
<td><p>May be present.</p></td>
<td><p>[ “KUNNR”, “Customer Name”  ]</p></td>
</tr>
<tr class="even">
<td><p>usage</p></td>
<td><p>Contains system-specific usage or context data, if available.</p>
<p>For example, the content of a database’s data dictionary, a MSSQL column comment, etc.</p></td>
<td><p>May be present. Default is the empty string.</p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

Properties in “location”:

<table>
<tbody>
<tr class="odd">
<td><p>Property</p></td>
<td><p>Description</p></td>
<td><p>Presence</p></td>
<td><p>Example 1</p></td>
</tr>
<tr class="even">
<td><p>technicalName</p></td>
<td><p>A short name of the field name</p></td>
<td><p>Must be present</p>
<p><strong>NOTE</strong>: This is the Technical Name that displays in the UI on the Data Set page.</p></td>
<td><p>KUNNR</p></td>
</tr>
<tr class="odd">
<td><p>path</p></td>
<td><p>The full system-specific path, location information for a field</p></td>
<td><p>Must be present</p>
<p><strong>NOTE</strong>: This is the Location (under the system name) that displays in the UI on the Data Set page.</p></td>
<td><p>dbo.KNA1.KUNNR</p></td>
</tr>
<tr class="even">
<td><p>&lt;custom properties&gt;</p></td>
<td><p>Any other custom property that integrators may choose to upload; any other system-specific properties.</p></td>
<td><p>May be present.</p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

Properties in “type”:

<table>
<tbody>
<tr class="odd">
<td><p>Property</p></td>
<td><p>Description</p></td>
<td><p>Presence</p></td>
<td><p>Example 1</p></td>
</tr>
<tr class="even">
<td><p>dataTypeIntent</p></td>
<td><p>A simplified data type from this list: text, number, Boolean, date, money, location, binary, identifier</p></td>
<td><p>May be present</p></td>
<td><p>text</p></td>
</tr>
<tr class="odd">
<td><p>baseDataType</p></td>
<td><p>The field data type</p></td>
<td><p>Must be present</p>
<p><strong>NOTE</strong>: This is displayed in the UI on the Add Fields tab on the Data Set page.</p></td>
<td><p>nvarchar</p></td>
</tr>
<tr class="even">
<td><p>range</p></td>
<td><p>Range constraints</p></td>
<td><p>Must be present if applicable.</p></td>
<td><p>JSON { … } (see “range” table below)</p></td>
</tr>
<tr class="odd">
<td><p>precision</p></td>
<td><p>A precision for numeric data types</p></td>
<td><p>Must be present when baseDataType is numeric; otherwise, must not be present.</p>
<p><strong>NOTE:</strong> This is displayed in the UI on the Add Fields tab on the Data Set detail page on the Data Set - Fields and Data Set - Add Fields tabs.</p></td>
<td><p> </p></td>
</tr>
<tr class="even">
<td><p>length</p></td>
<td><p>A length value for characters types</p></td>
<td><p>Must be present when baseDataType is an array of characters or bytes; otherwise, must not be present.</p>
<p><strong>NOTE</strong>: This is displayed in the UI on the Add Fields tab on the Data Set page.</p></td>
<td><p>36</p></td>
</tr>
<tr class="odd">
<td><p>encoding</p></td>
<td><p>Additional details about the encoding of the field</p></td>
<td><p>Must be present if applicable</p>
<p><strong>NOTE</strong>: This can be a string.</p></td>
<td><p>“Utf-8”, “latin-1”, IEEE-754 floating point, binary data is in big-endian or little-endian, bools are 0xFFFFF or 0x00001 etc.</p></td>
</tr>
<tr class="even">
<td><p>identity</p></td>
<td><p>Indicates whether this field is an identifier in the underlying model (e.g., a primary key in a relational db context, or a resource  identifier in a REST API context)</p></td>
<td><p>May be present.</p>
<p><strong>NOTE</strong>: Default to false.</p></td>
<td><p>true</p></td>
</tr>
<tr class="odd">
<td><p>optional</p></td>
<td><p>A determination if the field can be nullable</p></td>
<td><p>May be present.</p>
<p><strong>NOTE</strong>: Default to false.</p></td>
<td><p>true</p></td>
</tr>
<tr class="even">
<td><p>&lt;custom properties&gt;</p></td>
<td><p>Any other custom property that integrators may choose to upload; any other system-specific properties.</p></td>
<td><p>May be present.</p></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

Proposed properties in “range”:

<table>
<tbody>
<tr class="odd">
<td><p>Property</p></td>
<td><p>Description</p></td>
<td><p>Presence</p></td>
<td><p>Example 1</p></td>
</tr>
<tr class="even">
<td><p>minValue</p></td>
<td><p>A minimum value for numeric data</p></td>
<td><p>Must be present if applicable. Must not be present if not applicable.</p></td>
<td><p>-7.25</p></td>
</tr>
<tr class="odd">
<td><p>maxValue</p></td>
<td><p>A maximum value for numeric data</p></td>
<td><p>Must be present if applicable. Must not be present if not applicable.</p></td>
<td><p>13</p></td>
</tr>
<tr class="even">
<td><p>rangeValues</p></td>
<td><p>A finite list of values drawn from the default range of the baseDataType.</p></td>
<td><p>May be present if applicable. (If the data set would be really long, it might not be possible to include.)</p>
<p> </p>
<p>Must not be present if not applicable.</p></td>
<td><p>[ “Sunday”, “Monday”, “Tuesday”, “Wednesday”, “Thursday”, “Friday”, “Saturday” ]</p></td>
</tr>
<tr class="odd">
<td><p>rangeDataType</p></td>
<td><p>The name of the range constraint (e.g. a FK table name)</p></td>
<td><p>May be present if applicable.</p>
<p> </p>
<p>If applicable and rangeValues is not present, then this property must be present.</p></td>
<td><p>“DaysOfTheWeek”, “dbo.DaysOfTheWeek”</p></td>
</tr>
</tbody>
</table>

**The upload file must be zipped (compressed)**. The zipped file can
contain multiple JSON files to organize the files.

For example:

SAPFileUpload.zip can contain:

  - SAP (directory - **optional**)
      - HRFields.json
      - FinanceFields.json
      - LegalFields.json

Or it can contain one file

SAPFileUpload.zip

  - SAP (directory - **optional**)
      - Fields.json

To upload field metadata for a System:

1.  [Add a System](Set_Up_a_System.md).
    
    OR
    
    [Search for a System and open the detail
    page](Enhanced_Search.md).

2.  Click the drop-down menu for the System.
    
    ![](Resources/Images/SystemsDropDown.png)

3.  Select **Upload Metadata**.

4.  Drag and Drop the JSON file onto the upload modal.
    
    OR
    
    Browse for the file.

5.  Click **Upload**.

**IMPORTANT**: You will receive a message in the
[Notifications](Notifications.md) panel once the file has been
processed to indicate success or to inform you of issues with the
import.

After you receive a message that the upload succeeded, you can use your
browser refresh option to update the count in the
[Fields](Set_Up_a_System #Fields) panel to verify the upload.
Next, the fields can be used to set up Data Sets. Refer to [Set Up a
Data Set](Set_Up_a_Data_Set.md).

## <span id="RemoveFields"></span>Remove Fields from a System

You can remove specific fields (or a group of fields) from a System if
you re-import to a System with the import file in which fields that
**had been previously imported** to that System are not included. The
fields that you choose to exclude from the newly imported file are
marked as Removed from System in any [Data
Set](Set_Up_a_Data_Set.md) where the fields had been added.

If a field that was removed from a System is subsequently re-included in
the import file and imported to the System again it is made “active”
again in any data set in which it has been used.

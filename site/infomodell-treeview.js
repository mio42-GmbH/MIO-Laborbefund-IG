$(document).ready(function() {
  $.getJSON('infomodell_js_treeview_labbefund.json', function(data) {
    $('#jstree').jstree({
      'core': {
        'data': data
      },
      'plugins': ["search", "wholerow", "themes"]
    });
  });
});

$(function () {

  // Show details on selection
  $('#jstree').on("select_node.jstree", function (e, data) {
    const item = data.node;
    const meta = item.data || {};
    $('#details').show();
    $('#detailName div.detailContent').text(meta.name || "");
    //$('#detailId div.detailContent').text(item.id);
    $('#detailDescription div.detailContent').html(meta.description || "");
    $('#detailRationale div.detailContent').html(meta.rationale || "");
    $('#detailDatatype div.detailContent').text(meta.datatype || "");
    $('#detailCardinality div.detailContent').html(meta.cardinality || "");
    $('#detailOperationalisation div.detailContent').html(meta.operationalisations || "");
    $('#detailTermAssocs div.detailContent').html(meta.termAssocs || "");
    $('#detailCodes div.detailContent').html(meta.codes || "");
    $('#detailFHIRMappings div.detailContent').html(meta.fhirMappings || "");
    $('#detailOtherProperties div.detailContent').html(meta.otherProperties || "");

    const fields = ['detailName', 'detailDescription','detailRationale' , 'detailDatatype' ,'detailCardinality' , 'detailFHIRMappings', 'detailCodes', 'detailTermAssocs', 'detailOperationalisation', 'detailOtherProperties'];
    fields.forEach( (field) => {
        let fieldDiv = document.getElementById(field);
        if (fieldDiv.getElementsByClassName("detailContent")[0].textContent == '') {
            fieldDiv.style.setProperty('display', 'none');
        } else {
            fieldDiv.style.removeProperty('display');
        };
    });

  });

  // Filter with search
  let to = false;
  $('#treeSearch').keyup(function () {
    if (to) clearTimeout(to);
    to = setTimeout(function () {
      const v = $('#treeSearch').val();
      $('#jstree').jstree(true).search(v);
    }, 250);
  });

  // Handle anchor link in description
  $('#detailDescription').on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();
    const nodeId = $(this).attr('href').substring(1);
    $('#jstree').jstree('deselect_all');
    $('#jstree').jstree('select_node', nodeId);
    $('#jstree').jstree('open_node', $('#jstree').jstree(true).get_parent(nodeId));
    document.getElementById(`jstree_${nodeId}`).scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});

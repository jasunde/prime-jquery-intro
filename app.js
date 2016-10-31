$(document).ready(function() {
    var array = [];
    $('#employeeinfo').on('submit', function(event) {
      event.preventDefault();

      // initialize a new variable as an empty object
      var values = {};

      // convert the form inputs into an array
      var fields = $('#employeeinfo').serializeArray();

      // iterate over the array and transfer each index into a new property on an object with the value of what was entered.
      fields.forEach(function(element, index, array) {
        // review index notation vs. dot notation on objects
        // here, dot notation wouldn't work
        values[element.name] = element.value;
      });

      console.log(values);

      // clear out inputs
      $('#employeeinfo').find('input[type=text], input[type=number]').val('');

      // append to DOM
      appendDom(values);
    });

    function appendDom(empInfo) {
      $('#container').append('<tr></tr>');
      var $el = $('#container').children().last();

      $el.append('<td>' + empInfo.employeeFirstName + '</td>');
      $el.append('<td>' + empInfo.employeeLastName + '</td>');
      $el.append('<td>' + empInfo.idNumber + '</td>');
      $el.append('<td>' + empInfo.jobTitle + '</td>');
      $el.append('<td>' + empInfo.annualSalary + '</td>');
    }


});

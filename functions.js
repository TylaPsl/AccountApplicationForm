// BACK BUTTON FOR TS + CS PAGE
function GoBack() {
    window.history.back();
}



//AUTOFILL TRADING NAME
document.getElementById('company').addEventListener('change', autofill);

function autofill() {
  document.getElementById('trading').value = document.getElementById('company').value
}



//AUTOFILL POSTAL ADDRESS
document.getElementById('same').addEventListener('change', copyit);

function copyit() {
    document.getElementById('paddress').value = document.getElementById('address').value;
    document.getElementById('pline2').value = document.getElementById('line2').value;
    document.getElementById('psuburb').value = document.getElementById('suburb').value;
    document.getElementById('pcity').value = document.getElementById('city').value;
    document.getElementById('pzip').value = document.getElementById('zip').value;
  }


//AUTOFILL ACCOUNTS CONTACT
document.getElementById('samecont').addEventListener('change', copyadd);

function copyadd() {
    document.getElementById('aFName').value = document.getElementById('mFName').value;
    document.getElementById('aLName').value = document.getElementById('mLName').value;
    document.getElementById('aEmail').value = document.getElementById('mEmail').value;
    document.getElementById('aPhone').value = document.getElementById('mPhone').value;
  }


//SIGNATURE
(function() {
    window.requestAnimFrame = (function(callback) {
      return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimaitonFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
    })();
  
    var canvas = document.getElementById("sig-canvas");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#222222";
    ctx.lineWidth = 4;
  
    var drawing = false;
    var mousePos = {
      x: 0,
      y: 0
    };
    var lastPos = mousePos;
  
    canvas.addEventListener("mousedown", function(e) {
      drawing = true;
      lastPos = getMousePos(canvas, e);
    }, false);
  
    canvas.addEventListener("mouseup", function(e) {
      drawing = false;
    }, false);
  
    canvas.addEventListener("mousemove", function(e) {
      mousePos = getMousePos(canvas, e);
    }, false);
  
    // Add touch event support for mobile
    canvas.addEventListener("touchstart", function(e) {
  
    }, false);
  
    canvas.addEventListener("touchmove", function(e) {
      var touch = e.touches[0];
      var me = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      canvas.dispatchEvent(me);
    }, false);
  
    canvas.addEventListener("touchstart", function(e) {
      mousePos = getTouchPos(canvas, e);
      var touch = e.touches[0];
      var me = new MouseEvent("mousedown", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      canvas.dispatchEvent(me);
    }, false);
  
    canvas.addEventListener("touchend", function(e) {
      var me = new MouseEvent("mouseup", {});
      canvas.dispatchEvent(me);
    }, false);
  
    function getMousePos(canvasDom, mouseEvent) {
      var rect = canvasDom.getBoundingClientRect();
      return {
        x: mouseEvent.clientX - rect.left,
        y: mouseEvent.clientY - rect.top
      }
    }
  
    function getTouchPos(canvasDom, touchEvent) {
      var rect = canvasDom.getBoundingClientRect();
      return {
        x: touchEvent.touches[0].clientX - rect.left,
        y: touchEvent.touches[0].clientY - rect.top
      }
    }
  
    function renderCanvas() {
      if (drawing) {
        ctx.moveTo(lastPos.x, lastPos.y);
        ctx.lineTo(mousePos.x, mousePos.y);
        ctx.stroke();
        lastPos = mousePos;
      }
    }
  
    // Prevent scrolling when touching the canvas
    document.body.addEventListener("touchstart", function(e) {
      if (e.target == canvas) {
        e.preventDefault();
      }
    }, false);
    document.body.addEventListener("touchend", function(e) {
      if (e.target == canvas) {
        e.preventDefault();
      }
    }, false);
    document.body.addEventListener("touchmove", function(e) {
      if (e.target == canvas) {
        e.preventDefault();
      }
    }, false);
  
    (function drawLoop() {
      requestAnimFrame(drawLoop);
      renderCanvas();
    })();
  
    function clearCanvas() {
      canvas.width = canvas.width;
      ctx.strokeStyle = "#222222";
      ctx.lineWidth = 4;
    }
  
    // Set up the UI
    var sigText = document.getElementById("sig-dataUrl");
    var sigImage = document.getElementById("sig-image");
    var clearBtn = document.getElementById("sig-clearBtn");
    var submitBtn = document.getElementById("sig-submitBtn");
    clearBtn.addEventListener("click", function(e) {
      clearCanvas();
      sigText.innerHTML = "Data URL for your signature will go here!";
      sigImage.setAttribute("src", "");
    }, false);
    submitBtn.addEventListener("click", function(e) {
      var dataUrl = canvas.toDataURL();
      sigText.innerHTML = dataUrl;
      sigImage.setAttribute("src", dataUrl);
    }, false);
  
  })();



  // save as pdf
  function savepdf() {
    window.jsPDF = window.jspdf.jsPDF
    const doc = new jsPDF();


    doc.text(70,10, 'Account Application Form');
    doc.text(20,20, 'Company Details:');
    doc.text(20,30, 'Company Name:');
    doc.text(65,30, document.getElementById('company').value);
    doc.text(20,40, 'Trading Name:');
    doc.text(60,40, document.getElementById('trading').value);
    doc.text(20,50,'Phone:');
    doc.text(40,50, document.getElementById('phone').value);
    doc.text(20,60, 'Company Type:');
    doc.text(63,60, document.getElementById('type').value);

    doc.text(20,80, 'Physical Address:');
    doc.text(20,90, 'Address:');
    doc.text(45,90, document.getElementById('address').value);
    doc.text(20,100, 'Address line 2:');
    doc.text(60,100, document.getElementById('line2').value);
    doc.text(20,110, 'Country:');
    doc.text(45,110, document.getElementById('country').value);
    doc.text(20,120, 'City:');
    doc.text(35,120, document.getElementById('city').value);
    doc.text(20,130, 'Suburb:');
    doc.text(42,130, document.getElementById('suburb').value);
    doc.text(20,140, 'Postcode:');
    doc.text(48,140, document.getElementById('zip').value);

    doc.text(20,160, 'Postal Address:');
    doc.text(20,170, 'Address:');
    doc.text(45,170, document.getElementById('paddress').value);
    doc.text(20,180, 'Address line 2:');
    doc.text(60,180, document.getElementById('pline2').value);
    doc.text(20,190, 'Country:');
    doc.text(45,190, document.getElementById('pcountry').value);
    doc.text(20,200, 'City:');
    doc.text(35,200, document.getElementById('pcity').value);
    doc.text(20,210, 'Suburb:');
    doc.text(42,210, document.getElementById('psuburb').value);
    doc.text(20,220, 'Postcode:');
    doc.text(48,220, document.getElementById('pzip').value);

    doc.text(20,240, 'Management Contact:');
    doc.text(20,250, 'First Name:');
    doc.text(52,250, document.getElementById('mFName').value);
    doc.text(20,260, 'Last Name:');
    doc.text(52,260, document.getElementById('mLName').value);
    doc.text(20,270, 'Email:');
    doc.text(38,270, document.getElementById('mEmail').value);
    doc.text(20,280, 'Phone:');
    doc.text(40,280, document.getElementById('mPhone').value);

    doc.addPage();
    
    doc.text(20,20, 'Accounts Contact:');
    doc.text(20,30, 'First Name:');
    doc.text(52,30, document.getElementById('aFName').value);
    doc.text(20,40, 'Last Name:');
    doc.text(52,40, document.getElementById('aLName').value);
    doc.text(20,50, 'Email:');
    doc.text(38,50, document.getElementById('aEmail').value);
    doc.text(20,60, 'Phone:');
    doc.text(40,60, document.getElementById('aPhone').value);

    doc.text(20,80, 'Signature:');
    doc.text(20,90, 'Signed by:');
    doc.text(50,90, document.getElementById('sName').value);
    doc.text(20,100, 'Date:');
    doc.text(35,100, document.getElementById('date').value);
    doc.text(20,110, 'Signature:');

    var canvas = document.getElementById('sig-canvas');
    doc.addImage(canvas.toDataURL("image/png"),'PNG', 20, 110);
    
    doc.save(`form.pdf`)
  }




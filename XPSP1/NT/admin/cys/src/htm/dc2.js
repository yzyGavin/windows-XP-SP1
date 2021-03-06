//***********************    Localization variable    *****************
var L_strErrMsg_Message = "Invalid IP address entered."; 
//***********************    Localization variable    *****************

function loadForm()
// --------------------------------------------------------------------------------------
// function performed at page load; load the values stored in oDataStore
// --------------------------------------------------------------------------------------
{
	divMain2.load("oDataStore");
	var P_dc2=divMain2.getAttribute("P_dc2");
	if(P_dc2==null)	P_dc2 = getStaticIP() + "." + getSubNetMask() + "." + getDNSServer();
	if(P_dc2!="")
	{
		var arr_dc2 = P_dc2.split(".");					
		for(i=0;i<form.txtDC.length;i++)
		{
			form.txtDC[i].value=arr_dc2[i];				
		}			
	}
	loadFocus();
}
	
function accessKeys()
// --------------------------------------------------------------------------------------
// used Body.OnKeyDown 
// --------------------------------------------------------------------------------------
{
	key=event.keyCode;
	if(event.altKey)
	{
		if(key==83)			form.txtDC[0].focus();	// alt + s
		else if(key==85)	form.txtDC[4].focus();	// alt + u
		else if(key==80)	form.txtDC[8].focus();	// alt + p			
	}			
}
	
function back()
// --------------------------------------------------------------------------------------
// process when click on BACK button (persist data and load previous dc.htm page)
// --------------------------------------------------------------------------------------
{	saveForm(); self.location.href="dc.htm"; }
	
function next()
// --------------------------------------------------------------------------------------
// process when NEXT button clicked ; check entries made and proceed to next page (dc3.htm) 
// --------------------------------------------------------------------------------------
{
	if(checkForm2()) { saveForm(); self.location.href="dc3.htm"; }
	else	showAlert(L_strErrMsg_Message)
}

function saveForm()
// --------------------------------------------------------------------------------------
// process before exiting the page; saves the selection and entries made
// -------------------------------------------------------------------------------------
{
	var P_dc2="";
	for(i=0;i<form.txtDC.length;i++)
	{
		P_dc2 += form.txtDC[i].value;
		if(i!=form.txtDC.length-1) P_dc2 += ".";
	}		
	divMain2.setAttribute("P_dc2",P_dc2);
	divMain2.save("oDataStore");
}


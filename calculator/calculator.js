/*
#################################################################################
# ~ AKW Combine Calculators ~													#
#																				#
# @Author 			: Adhit KW "Dhit" - Logika Kita								#
# Email 			: logika.kita@gmail.com 									#
# @Copyright 2013 																#
#################################################################################
*/

/* AKW - PID defined for each form
PID | Page Title | js name
120 | Davidson/Rutherford/Williamson Purchase | DavidsonPur.js [DEFAULT]
126 | Hamilton/Knox Purchase | HamiltonPur.js
128 | Shelby Purchase | ShelbyPur.js
129 | GFE Purchase calculator. All Tennessee counties except Davidson, Hamilton, Knox, Rutherford, Shelby and Williamson. | OtherPur.js
130 | Davidson/Rutherford/Williamson Refi | DavidsonRefi.js
131 | Hamilton/Knox Refi | HamiltonRefi.js
133 | GFE refinance calculator. All Tennessee counties except Davidson, Hamilton, Knox, Rutherford, Shelby and Williamson. | OtherRefi.js
134 | Shelby Refi | ShelbyRefi.js
135 | Davidson/Rutherford/Williamson Reissue | DavidsonRefiReissue.js
136 | Hamilton/Knox Reissue | HamiltonRefiReissue.js
138 | GFE refinance with reissue rate calculator. All Tennessee counties except Davidson, Hamilton, Knox, Rutherford, Shelby and Williamson. | OtherRefiReissue.js
139 | Shelby Reissue } ShelbyRefiReissue.js
*/
var akw_global_var_pid = "120";
var akw_global_var_form = "DavidsonPur";

//AKW - Construct form based on each form
function akwConstructForm(whichform){
	akwdefault = "DavidsonPur";

	akwResetForm();
	switch (whichform) {
		case "DavidsonPur":
			akwSetTitle("Davidson/Rutherford/Williamson Purchase");
			$("#akw_reissue_div").hide();
			$(".akw_reissue_field").hide();
			$("#akwpurchasefield").show();
			$(".akw_padding_omit_reissue").attr("style", "padding:10px;");
			$("#Text25").val("$395.00");
			$("#Text7").val("");
			$("#Text24").val(""); // Not Necessary?
			$("input[name=searchExam]").attr("readonly", "readonly");
			$("input[name=searchExam]").val("");
			$("input[name=totalRec]").val("$131.00");
			$("input[name=deedRec]").val("$18.00");
			$("#Text24").attr("name", "lenderPrem");

			akw_global_var_pid = 120;
			akwOnLoad();
			break;
		case "HamiltonPur":
			akwSetTitle("Hamilton/Knox Purchase");
			$("#akw_reissue_div").hide();
			$(".akw_reissue_field").hide();
			$("#akwpurchasefield").show();
			$(".akw_padding_omit_reissue").attr("style", "padding:10px;");
			$("#Text25").val("$395.00");
			$("#Text7").val("");
			$("#Text24").val(""); // Not Necessary?
			$("input[name=searchExam]").removeAttr("readonly");
			$("input[name=searchExam]").val("");
			$("input[name=totalRec]").val("$131.00");
			$("input[name=deedRec]").val("$18.00");
			$("#Text24").attr("name", "lenderPrem");

			akw_global_var_pid = 126;
			akwOnLoad();
			break;
		case "ShelbyPur":
			akwSetTitle("Shelby Purchase");
			$("#akw_reissue_div").hide();
			$(".akw_reissue_field").hide();
			$("#akwpurchasefield").show();
			$(".akw_padding_omit_reissue").attr("style", "padding:10px;");
			$("#Text25").val("$395.00");
			$("#Text7").val("");
			$("#Text24").val(""); // Not Necessary?
			$("input[name=searchExam]").removeAttr("readonly");
			$("input[name=searchExam]").val("$275.00");
			$("input[name=totalRec]").val("$131.00");
			$("input[name=deedRec]").val("$18.00");
			$("#Text24").attr("name", "lenderPrem");

			akw_global_var_pid = 128;
			akwOnLoad();
			break;
		case "OtherPur":
			akwSetTitle("GFE Purchase calculator. All Tennessee counties except Davidson, Hamilton, Knox, Rutherford, Shelby and Williamson.");
			$("#akw_reissue_div").hide();
			$(".akw_reissue_field").hide();
			$("#akwpurchasefield").show();
			$(".akw_padding_omit_reissue").attr("style", "padding:10px;");
			$("#Text25").val("$395.00");
			$("#Text7").val("");
			$("#Text24").val(""); // Not Necessary?
			$("input[name=searchExam]").removeAttr("readonly");
			$("input[name=searchExam]").val("$275.00");
			$("input[name=totalRec]").val("$131.00");
			$("input[name=deedRec]").val("$18.00");
			$("#Text24").attr("name", "lenderPrem");

			akw_global_var_pid = 129;
			akwOnLoad();
			break;
		case "DavidsonRefi":
			akwSetTitle("Davidson/Rutherford/Williamson Refi");
			$("#akw_reissue_div").hide();
			$(".akw_reissue_field").hide();
			$("#akwpurchasefield").hide();
			$(".akw_padding_omit_reissue").attr("style", "padding:10px;");
			$("#Text25").val("$395.00");
			$("#Text7").val("N/A");
			$("#Text24").val(""); // Not Necessary?
			$("input[name=searchExam]").attr("readonly", "readonly");
			$("input[name=searchExam]").val("");
			$("input[name=totalRec]").val("$112.00");
			$("input[name=deedRec]").val("");
			$("#Text24").attr("name", "lenderPrem");

			akw_global_var_pid = 130;
			akwOnLoad();
			break;
		case "HamiltonRefi":
			akwSetTitle("Hamilton/Knox Refi");
			$("#akw_reissue_div").hide();
			$(".akw_reissue_field").hide();
			$("#akwpurchasefield").hide();
			$(".akw_padding_omit_reissue").attr("style", "padding:10px;");
			$("#Text25").val("$395.00");
			$("#Text7").val("N/A");
			$("#Text24").val(""); // Not Necessary?
			$("input[name=searchExam]").attr("readonly", "readonly");
			$("input[name=searchExam]").val("");
			$("input[name=totalRec]").val("$112.00");
			$("input[name=deedRec]").val("");
			$("#Text24").attr("name", "lenderPrem");

			akw_global_var_pid = 131;
			akwOnLoad();
			break;
		case "OtherRefi":
			akwSetTitle("GFE refinance calculator. All Tennessee counties except Davidson, Hamilton, Knox, Rutherford, Shelby and Williamson.");
			$("#akw_reissue_div").hide();
			$(".akw_reissue_field").hide();
			$("#akwpurchasefield").hide();
			$(".akw_padding_omit_reissue").attr("style", "padding:10px;");
			$("#Text25").val("$395.00");
			$("#Text7").val("N/A");
			$("#Text24").val(""); // Not Necessary?
			$("input[name=searchExam]").attr("readonly", "readonly");
			$("input[name=searchExam]").val("$275.00");
			$("input[name=totalRec]").val("$112.00");
			$("input[name=deedRec]").val("");
			$("#Text24").attr("name", "lenderPrem");

			akw_global_var_pid = 133;
			akwOnLoad();
			break;
		case "ShelbyRefi":
			akwSetTitle("Shelby Refi");
			$("#akw_reissue_div").hide();
			$(".akw_reissue_field").hide();
			$("#akwpurchasefield").hide();
			$(".akw_padding_omit_reissue").attr("style", "padding:10px;");
			$("#Text25").val("$395.00");
			$("#Text7").val("N/A");
			$("#Text24").val(""); // Not Necessary?
			$("input[name=searchExam]").attr("readonly", "readonly");
			$("input[name=searchExam]").val("$275.00");
			$("input[name=totalRec]").val("$112.00");
			$("input[name=deedRec]").val("");
			$("#Text24").attr("name", "lenderPrem");

			akw_global_var_pid = 134;
			akwOnLoad();
			break;
		case "DavidsonRefiReissue":
			akwSetTitle("Davidson/Rutherford/Williamson Reissue");
			$("#akw_reissue_div").show();
			$(".akw_reissue_field").show();
			$("#akwpurchasefield").hide();
			$(".akw_padding_omit_reissue").attr("style", "");
			$("#Text25").val("$190.00");
			$("#Text7").val("N/A");
			$("#Text24").val(""); // Not Necessary?
			$("input[name=searchExam]").attr("readonly", "readonly");
			$("input[name=searchExam]").val("");
			$("input[name=totalRec]").val("$112.00");
			$("input[name=deedRec]").val("");
			$("#Text24").attr("name", "reissueRate");

			akw_global_var_pid = 135;
			akwOnLoad();
			break;
		case "HamiltonRefiReissue":
			akwSetTitle("Hamilton/Knox Reissue");
			$("#akw_reissue_div").show();
			$(".akw_reissue_field").show();
			$("#akwpurchasefield").hide();
			$(".akw_padding_omit_reissue").attr("style", "");
			$("#Text25").val("$395.00");
			$("#Text7").val("N/A");
			$("#Text24").val(""); // Not Necessary?
			$("input[name=searchExam]").attr("readonly", "readonly");
			$("input[name=searchExam]").val("");
			$("input[name=totalRec]").val("$112.00");
			$("input[name=deedRec]").val("");
			$("#Text24").attr("name", "reissueRate");

			akw_global_var_pid = 136;
			akwOnLoad();
			break;
		case "OtherRefiReissue":
			akwSetTitle("GFE refinance with reissue rate calculator. All Tennessee counties except Davidson, Hamilton, Knox, Rutherford, Shelby and Williamson.");
			$("#akw_reissue_div").show();
			$(".akw_reissue_field").show();
			$("#akwpurchasefield").hide();
			$(".akw_padding_omit_reissue").attr("style", "");
			$("#Text25").val("$395.00");
			$("#Text7").val("N/A");
			$("#Text24").val(""); // Not Necessary?
			$("input[name=searchExam]").attr("readonly", "readonly");
			$("input[name=searchExam]").val("$275.00");
			$("input[name=totalRec]").val("$112.00");
			$("input[name=deedRec]").val("");
			$("#Text24").attr("name", "reissueRate");

			akw_global_var_pid = 138;
			akwOnLoad();
			break;
		case "ShelbyRefiReissue":
			akwSetTitle("Shelby Reissue");
			$("#akw_reissue_div").show();
			$(".akw_reissue_field").show();
			$("#akwpurchasefield").hide();
			$(".akw_padding_omit_reissue").attr("style", "");
			$("#Text25").val("$395.00");
			$("#Text7").val("N/A");
			$("#Text24").val(""); // Not Necessary?
			$("input[name=searchExam]").attr("readonly", "readonly");
			$("input[name=searchExam]").val("$275.00");
			$("input[name=totalRec]").val("$112.00");
			$("input[name=deedRec]").val("");
			$("#Text24").attr("name", "reissueRate");

			akw_global_var_pid = 139;
			akwOnLoad();
			break;
		default:
			akwConstructForm(akwdefault);
	}
}

//AKW - Switching the calculator function based on each form
function calc(whichform){
	akwdefault = "DavidsonPur";

	switch (whichform) {
		case "DavidsonPur":
			var a = Number(document.myform.purchPrice.value) || 0;   // trap NaN entries
			if (a > 999999000) {
				alert("Invalid value. Purchase price must be between 0 and 999,999,000.00!");
				document.myform.purchPrice.focus();
				return (false);
			}
			ownerAmtdec = ("$" + a.toFixed(2));
			document.myform.ownerAmt.value= addCommas(ownerAmtdec);
			deedTax1 = (((a) * 0.0037).toFixed(2));
			deedTax = addCommas ("$" + (deedTax1));
			document.myform.deedTax.value = (deedTax);
			a = RoundUp1000(a);
			var band1 = 0; var band2 = 0; var band3 = 0; var band4 = 0; var band5 = 0; var band6 = 0;

			if (a > 15000000) {band1 = a - 15000000;}
			if (a > 10000000) {band2 = a - 10000000 - band1;}
			if (a > 5000000) {band3 = a -  5000000 - band1 - band2;}
			if (a > 1000000) {band4 = a - 1000000 - band1 - band2 - band3;}
			if (a > 500000) {band5 = a -  500000 - band1 - band2 - band3 - band4;}
			if (a > 100000) {band6 = a -  100000 - band1 - band2 - band3 - band4 - band5;}
			if (a > 1000) {band7 = a -  1000 - band1 - band2 - band3 - band4 - band5 - band6;}
			var premA = 200 + (band7/1000 * 6) + (band6/1000 * 4.5) + (band5/1000 * 3) + (band4/1000 * 2) + (band3/1000 * 1.5) + (band2/1000 * 1.25) + (band1/1000 *1);
			//end of Owners Premium calc
			///////////////////////////////////////////
			// begin Lenders Premium calc
			var b = Number(document.myform.purchPrice.value) || 0;   // trap NaN entries
			//AKW-2013-05 handle empty fields
			if (a == "" || b == "") {
				alert("Please enter a value in field(s)");
				return (false);
			}
			if (b < 2009) {
				alert("Please enter a value for the loan amount greater than $2008.00!");
				document.myform.loanAmt.focus();
				return (false);
			}
			if (b > a) {
				alert("Please contact our office for quote!");
				document.myform.loanAmt.focus();
				return (true);
			}
			if (b > 999999000) {
				alert("Invalid value. Loan amount must be between 2009 and 999,999,000.00!");
				document.myform.loanAmt.focus();
				return (false);
			}
                        loan = Number(document.myform.loanAmt.value)
			lenderAmtdec = ("$" + Number(document.myform.loanAmt.value).toFixed(2));
			document.myform.lenderAmt.value= addCommas(lenderAmtdec);
			mtgTax1 = (((loan) - 2000) * 0.00115).toFixed(2);
			mtgTax = addCommas ("$" + (((loan) - 2000) * 0.00115).toFixed(2));
			document.myform.mtgTax.value = (mtgTax);
			b = RoundUp1000(b);
			var cand1 = 0; var cand2 = 0; var cand3 = 0; var cand4 = 0; var cand5 = 0; var cand6 = 0; var cand7 = 0;
			if (b > 15000000) {cand1 = b - 15000000;}
			if (b > 10000000) {cand2 = b - 10000000 - cand1;}
			if (b > 5000000) {cand3 = b - 5000000 - cand1 - cand2;}
			if (b > 1000000) {cand4 = b - 1000000 - cand1 - cand2 - cand3;}
			if (b > 500000) {cand5 = b -  500000 - cand1 - cand2 - cand3 - cand4;}
			if (b > 100000) {cand6 = b -  100000 - cand1 - cand2 - cand3 - cand4 - cand5;}
			if (b > 1000) {cand7 = b -  1000 - cand1 - cand2 - cand3 - cand4 - cand5 - cand6;}
			var premB = 200 + (cand7/1000 * 6) + (cand6/1000 * 4.5) + (cand5/1000 * 3) + (cand4/1000 * 2) + (cand3/1000 * 1.5) + (cand2/1000 * 1.25) + (cand1/1000 *1);
			// end of Lenders Premium calc
			lenderPremdec = ("$" + premB.toFixed(2));
			document.myform.simRate.value = addCommas(lenderPremdec);
			simRate = 50;
			document.myform.lenderPrem.value = addCommas("$" + simRate.toFixed(2));
			closingIns = addCommas("$" + (325 + premB).toFixed(2));
			totalTax = addCommas ("$" + (((a) * 0.0037) + ((1 +(b) - 2000) * 0.00115)).toFixed(2));
			totalClosing1 = (505 + (((a) * 0.0037) + (((b) - 2000) * 0.00115) + premB + (premA - premB))).toFixed(2);// this is 90 + 30 + 30 + 50 + 125 + 130 + 35 + deedTax + mtgTax + premB + (premA - premB)
			totalClosing = addCommas ("$" + totalClosing1);
			document.myform.totalClosing.value = (totalClosing);
			document.myform.closingIns.value = "$495.00"
			document.myform.totalTax.value = (totalTax);
			break;
		case "HamiltonPur":
			var a = Number(document.myform.purchPrice.value) || 0;   // trap NaN entries
			if (a > 999999000) {
				alert("Invalid value. Purchase price must be between 0 and 999,999,000.00!");
				document.myform.purchPrice.focus();
				return (false);
			}
			ownerAmtdec = ("$" + a.toFixed(2));
			document.myform.ownerAmt.value= addCommas(ownerAmtdec);
			deedTax1 = (((a) * 0.0037).toFixed(2));
			deedTax = addCommas ("$" + (deedTax1));
			document.myform.deedTax.value = (deedTax);
			a = RoundUp1000(a);
			var band1 = 0; var band2 = 0; var band3 = 0; var band4 = 0; var band5 = 0; var band6 = 0;
			if (a > 15000000) {band1 = a - 15000000;}
			if (a > 10000000) {band2 = a - 10000000 - band1;}
			if (a > 5000000) {band3 = a - 5000000 - band1 - band2;}
			if (a > 1000000) {band4 = a - 1000000 - band1 - band2 - band3;}
			if (a > 100000) {band5 = a -  100000 - band1 - band2 - band3 - band4;}
			if (a > 1000) {band6 = a -  1000 - band1 - band2 - band3 - band4 - band5;}
			var premA = 200 + (band6/1000 * 6) + (band5/1000 * 3) + (band4/1000 * 2) + (band3/1000 * 1.5) + (band2/1000 * 1.25) + (band1/1000 *1);
			//end of Owners Premium calc
			///////////////////////////////////////////
			// begin Lenders Premium calc
			var b = Number(document.myform.loanAmt.value) || 0;   // trap NaN entries
			if (a == "" || b == "") {
				alert("Please enter a value in field(s)");
				return (false);
			}
			if (b < 2009) {
				alert("Please enter a value for the loan amount greater than $2008.00!");
				document.myform.loanAmt.focus();
				return (false);
			}
			if (b > a) {
				alert("Please contact our office for quote!");
				document.myform.loanAmt.focus();
				return (true);
			}
			if (b > 999999000) {
				alert("Invalid value. Loan amount must be between 2009 and 999,999,000.00!");
				document.myform.loanAmt.focus();
				return (false);
			}
			lenderAmtdec = ("$" + b.toFixed(2));
			document.myform.lenderAmt.value= addCommas(lenderAmtdec);
			mtgTax1 = (((b) - 2000) * 0.00115).toFixed(2);
			mtgTax = addCommas ("$" + (((b) - 2000) * 0.00115).toFixed(2));
			document.myform.mtgTax.value = (mtgTax);
			b = RoundUp1000(b);
			var cand1 = 0; var cand2 = 0; var cand3 = 0; var cand4 = 0; var cand5 = 0; var cand6 = 0;
			if (b > 15000000) {cand1 = b - 15000000;}
			if (b > 10000000) {cand2 = b - 10000000 - cand1;}
			if (b > 5000000) {cand3 = b - 5000000 - cand1 - cand2;}
			if (b > 1000000) {cand4 = b - 1000000 - cand1 - cand2 - cand3;}
			if (b > 100000) {cand5 = b -  100000 - cand1 - cand2 - cand3 - cand4;}
			if (b > 1000) {cand6 = b -  1000 - cand1 - cand2 - cand3 - cand4 - cand5;}
			var premB = 200 + (cand6/1000 * 6) + (cand5/1000 * 3) + (cand4/1000 * 2) + (cand3/1000 * 1.5) + (cand2/1000 * 1.25) + (cand1/1000 *1);
			// end of Lenders Premium calc
			lenderPremdec = ("$" + premB.toFixed(2));
			document.myform.simRate.value = addCommas(lenderPremdec);
			simRate = 50;
			document.myform.lenderPrem.value = addCommas("$" + simRate.toFixed(2));			closingIns = addCommas("$" + (325 + premB).toFixed(2));
			totalTax = addCommas ("$" + (((a) * 0.0037) + ((1 +(b) - 2000) * 0.00115)).toFixed(2));
			totalClosing1 = (505 + (((a) * 0.0037) + (((b) - 2000) * 0.00115) + premB + (premA - premB))).toFixed(2);// this is 90 + 30 + 30 + 50 + 125 + 130 + 35 + deedTax + mtgTax + premB + (premA - premB)
			totalClosing = addCommas ("$" + totalClosing1);
			document.myform.totalClosing.value = (totalClosing);
			document.myform.closingIns.value = "$495.00"
			document.myform.totalTax.value = (totalTax);
			break;
		case "ShelbyPur":
			var a = Number(document.myform.purchPrice.value) || 0;   // trap NaN entries
			if (a > 999999000) {
				alert("Invalid value. Purchase price must be between 0 and 999,999,000.00!");
				document.myform.purchPrice.focus();
				return (false);
			}
			ownerAmtdec = ("$" + a.toFixed(2));
			document.myform.ownerAmt.value= addCommas(ownerAmtdec);
			deedTax1 = (((a) * 0.0037).toFixed(2));
			deedTax = addCommas ("$" + (deedTax1));
			document.myform.deedTax.value = (deedTax);
			a = RoundUp1000(a);
			var band1 = 0; var band2 = 0; var band3 = 0;
			if (a > 1000000) {band1 = a - 1000000;}
			if (a > 100000) {band2 = a -  100000 - band1;}
			if (a > 1000) {band3 = a -  1000 - band1 - band2;}
			var premA = 105 + (band3/1000 * 3.75) + (band2/1000 * 3.25) + (band1/1000 * 1);
			//end of Owners Premium calc
			///////////////////////////////////////////
			// begin Lenders Premium calc
			var b = Number(document.myform.loanAmt.value) || 0;   // trap NaN entries
			if (a == "" || b == "") {
				alert("Please enter a value in field(s)");
				return (false);
			}
			if (b < 2009) {
				alert("Please enter a value for the loan amount greater than $2008.00!");
				document.myform.loanAmt.focus();
				return (false);
			}
			if (b > a) {
				alert("Please contact our office for quote!");
				document.myform.loanAmt.focus();
				return (true);
			}
			if (b > 999999000) {
				alert("Invalid value. Loan amount must be between 2009 and 999,999,000.00!");
				document.myform.loanAmt.focus();
				return (false);
			}
			lenderAmtdec = ("$" + b.toFixed(2));
			document.myform.lenderAmt.value= addCommas(lenderAmtdec);
			mtgTax1 = (((b) - 2000) * 0.00115).toFixed(2);
			mtgTax = addCommas ("$" + (((b) - 2000) * 0.00115).toFixed(2));
			document.myform.mtgTax.value = (mtgTax);
			b = RoundUp1000(b);
			var cand1 = 0; var cand2 = 0; var cand3 = 0;
			if (b > 1000000) {cand1 = b - 1000000;}
			if (b > 100000) {cand2 = b -  100000 - cand1;}
			if (b > 1000) {cand3 = b -  1000 - cand1 - cand2;}
			var premB = 105 + (cand3/1000 * 3.75) + (cand2/1000 * 3.25) + (cand1/1000 * 1);
			// end of Lenders Premium calc
			lenderPremdec = ("$" + premB.toFixed(2));
			document.myform.simRate.value = addCommas(lenderPremdec);
			simRate = 50;
			document.myform.lenderPrem.value = addCommas("$" + simRate.toFixed(2));			closingIns = addCommas("$" + (600 + premB).toFixed(2));
			totalTax = addCommas ("$" + (((a) * 0.0037) + ((1 +(b) - 2000) * 0.00115)).toFixed(2));
			totalClosing1 = (730 + (((a) * 0.0037) + (((b) - 2000) * 0.00115) + premB + (premA - premB))).toFixed(2);// this is 275 + 90 + 30 + 30 + 50 + 125 + 130 + 35 + deedTax + mtgTax + premB + (premA - premB)
			totalClosing = addCommas ("$" + totalClosing1);
			document.myform.totalClosing.value = (totalClosing);
			document.myform.closingIns.value = "$495.00"
			document.myform.totalTax.value = (totalTax);
			break;
		case "OtherPur":
			var a = Number(document.myform.purchPrice.value) || 0;   // trap NaN entries
			if (a > 999999000) {
				alert("Invalid value. Purchase price must be between 0 and 999,999,000.00!");
				document.myform.purchPrice.focus();
				return (false);
			}
			ownerAmtdec = ("$" + a.toFixed(2));
			document.myform.ownerAmt.value= addCommas(ownerAmtdec);
			deedTax1 = (((a) * 0.0037).toFixed(2));
			deedTax = addCommas ("$" + (deedTax1));
			document.myform.deedTax.value = (deedTax);
			a = RoundUp1000(a);
			var band1 = 0; var band2 = 0; var band3 = 0; var band4 = 0; var band5 = 0; var band6 = 0; var band7 = 0;
			if (a > 15000000) {band1 = a - 15000000;}
			if (a > 10000000) {band2 = a - 10000000 - band1;}
			if (a > 5000000) {band3 = a - 5000000 - band1 - band2;}
			if (a > 1000000) {band4 = a -  1000000 - band1 - band2 - band3;}
			if (a > 100000) {band5 = a - 100000 - band1 - band2 - band3 - band4;}
			if (a > 50000) {band6 = a -  50000 - band1 - band2 - band3 - band4 - band5;}
			if (a > 35000) {band7 = a -  35000 - band1 - band2 - band3 - band4 - band5 - band6;}
			var premA = 148.75 + (band7/1000 * 4.25) + (band6/1000 *3.5) + (band5/1000 * 2.5) + (band4/1000 * 2) + (band3/1000 * 1.5) + (band2/1000 * 1.25) + (band1/1000 * 1);
			//end of Owners Premium calc
			///////////////////////////////////////////
			// begin Lenders Premium calc
			var b = Number(document.myform.loanAmt.value) || 0;   // trap NaN entries
			if (a == "" || b == "") {
				alert("Please enter a value in field(s)");
				return (false);
			}
			if (b < 2009) {
				alert("Please enter a value for the loan amount greater than $2008.00!");
				document.myform.loanAmt.focus();
				return (false);
			}
			if (b > a) {
				alert("Please contact our office for quote!");
				document.myform.loanAmt.focus();
				return (true);
			}
			if (b > 999999000) {
				alert("Invalid value. Loan amount must be between 2009 and 999,999,000.00!");
				document.myform.loanAmt.focus();
				return (false);
			}
			lenderAmtdec = ("$" + b.toFixed(2));
			document.myform.lenderAmt.value= addCommas(lenderAmtdec);
			mtgTax1 = (((b) - 2000) * 0.00115).toFixed(2);
			mtgTax = addCommas ("$" + (((b) - 2000) * 0.00115).toFixed(2));
			document.myform.mtgTax.value = (mtgTax);
			b = RoundUp1000(b);
			var cand1 = 0; var cand2 = 0; var cand3 = 0; var cand4 = 0; var cand5 = 0; var cand6 = 0; var cand7 = 0;
			if (b > 15000000) {cand1 = b - 15000000;}
			if (b > 10000000) {cand2 = b - 10000000 - cand1;}
			if (b > 5000000) {cand3 = b - 5000000 - cand1 - cand2;}
			if (b > 1000000) {cand4 = b - 1000000 - cand1 - cand2 - cand3;}
			if (b > 100000) {cand5 = b -  100000 - cand1 - cand2 - cand3 - cand4;}
			if (b > 50000) {cand6 = b - 50000 - cand1 - cand2 - cand3 - cand4 - cand5;}
			if (b > 35000) {cand7 = b - 35000 - cand1 - cand2 - cand3 - cand4 - cand5 - cand6;}
			var premB = 148.75 + (band7/1000 * 4.25) + (cand6/1000 * 3.5) + (cand5/1000 * 2.5) + (cand4/1000 * 2) + (cand3/1000 * 1.5) + (cand2/1000 * 1.25) + (cand1/1000 * 1);
			// end of Lenders Premium calc
			lenderPremdec = ("$" + premB.toFixed(2));
			document.myform.simRate.value = addCommas(lenderPremdec);
			simRate = 50;
			document.myform.lenderPrem.value = addCommas("$" + simRate.toFixed(2));			closingIns = addCommas("$" + (600 + premB).toFixed(2));
			totalTax = addCommas ("$" + (((a) * 0.0037) + ((1 +(b) - 2000) * 0.00115)).toFixed(2));
			totalClosing1 = (765 + (((a) * 0.0037) + (((b) - 2000) * 0.00115) + premB + (premA - premB))).toFixed(2);// this is 275 + 90 + 30 + 30 + 50 + 125 + 130 + 35 + deedTax + mtgTax + premB + (premA - premB)
			totalClosing = addCommas ("$" + totalClosing1);
			document.myform.totalClosing.value = (totalClosing);
			document.myform.closingIns.value = (closingIns)
			document.myform.totalTax.value = (totalTax);
			break;
		case "DavidsonRefi":
			var b = Number(document.myform.loanAmt.value) || 0;   // trap NaN entries
			//AKW - Updates on 2013-05
			if (b == "") {
				alert("Please enter a value in field");
				return (false);
			}
			if (b < 2009) {
				alert("Please enter a value for the loan amount greater than $2008.00!");
				document.myform.loanAmt.focus();
				return (false);
			}
			if (b > 999999000) {
				alert("Invalid value. Loan amount must be between 2009 and 999,999,000.00!");
				document.myform.loanAmt.focus();
				return (false);
			}
			lenderAmtdec = ("$" + b.toFixed(2));
			document.myform.lenderAmt.value= addCommas(lenderAmtdec);
			mtgTax1 = (((b) - 2000) * 0.00115).toFixed(2);
			mtgTax = addCommas ("$" + (((b) - 2000) * 0.00115).toFixed(2));
			document.myform.mtgTax.value = (mtgTax);
			b = RoundUp1000(b);
			var cand1 = 0; var cand2 = 0; var cand3 = 0; var cand4 = 0; var cand5 = 0; var cand6 = 0; var cand7 = 0;

			if (b > 15000000) {cand1 = b - 15000000;}
			if (b > 10000000) {cand2 = b - 10000000 - cand1;}
			if (b > 5000000) {cand3 = b - 5000000 - cand1 - cand2;}
			if (b > 1000000) {cand4 = b - 1000000 - cand1 - cand2 - cand3;}
			if (b > 500000) {cand5 = b -  500000 - cand1 - cand2 - cand3 - cand4;}
			if (b > 100000) {cand6 = b -  100000 - cand1 - cand2 - cand3 - cand4 - cand5;}
			if (b > 1000) {cand7 = b -  1000 - cand1 - cand2 - cand3 - cand4 - cand5 - cand6;}
			var premB = 200 + (cand7/1000 * 6) + (cand6/1000 * 4.5) + (cand5/1000 * 3) + (cand4/1000 * 2) + (cand3/1000 * 1.5) + (cand2/1000 * 1.25) + (cand1/1000 *1);
			lenderPremdec = ("$" + premB.toFixed(2));
			document.myform.lenderPrem.value = addCommas(lenderPremdec);
			closingIns = addCommas("$" + (390 + premB).toFixed(2));
			totalTax = mtgTax;
			totalClosing1 = (502 + ((((b) - 2000) * 0.00115) + premB)).toFixed(2);
			totalClosing = addCommas ("$" + totalClosing1);
			document.myform.totalClosing.value = (totalClosing);
			document.myform.closingIns.value = (closingIns)
			document.myform.totalTax.value = (totalTax);
			break;
		case "HamiltonRefi":
			var b = Number(document.myform.loanAmt.value) || 0;   // trap NaN entries
			//AKW - Updates on 2013-05
			if (b == "") {
				alert("Please enter a value in field");
				return (false);
			}
			if (b < 2009) {
				alert("Please enter a value for the loan amount greater than $2008.00!");
				document.myform.loanAmt.focus();
				return (false);
			}
			if (b > 999999000) {
				alert("Invalid value. Loan amount must be between 2009 and 999,999,000.00!");
				document.myform.loanAmt.focus();
				return (false);
			}
			lenderAmtdec = ("$" + b.toFixed(2));
			document.myform.lenderAmt.value= addCommas(lenderAmtdec);
			mtgTax1 = (((b) - 2000) * 0.00115).toFixed(2);
			mtgTax = addCommas ("$" + (((b) - 2000) * 0.00115).toFixed(2));
			document.myform.mtgTax.value = (mtgTax);
			b = RoundUp1000(b);
			var cand1 = 0; var cand2 = 0; var cand3 = 0; var cand4 = 0; var cand5 = 0; var cand6 = 0;
			if (b > 15000000) {cand1 = b - 15000000;}
			if (b > 10000000) {cand2 = b - 10000000 - cand1;}
			if (b > 5000000) {cand3 = b - 5000000 - cand1 - cand2;}
			if (b > 1000000) {cand4 = b - 1000000 - cand1 - cand2 - cand3;}
			if (b > 100000) {cand5 = b -  100000 - cand1 - cand2 - cand3 - cand4;}
			if (b > 1000) {cand6 = b -  1000 - cand1 - cand2 - cand3 - cand4 - cand5;}
			var premB = 200 + (cand6/1000 * 6) + (cand5/1000 * 3) + (cand4/1000 * 2) + (cand3/1000 * 1.5) + (cand2/1000 * 1.25) + (cand1/1000 *1);
			lenderPremdec = ("$" + premB.toFixed(2));
			document.myform.lenderPrem.value = addCommas(lenderPremdec);
			closingIns = addCommas("$" + (390 + premB).toFixed(2));
			totalTax = mtgTax;
			totalClosing1 = (502 + ((((b) - 2000) * 0.00115) + premB)).toFixed(2);
			totalClosing = addCommas ("$" + totalClosing1);
			document.myform.totalClosing.value = (totalClosing);
			document.myform.closingIns.value = (closingIns)
			document.myform.totalTax.value = (totalTax);
			break;
		case "OtherRefi":
			var b = Number(document.myform.loanAmt.value) || 0;   // trap NaN entries
			//AKW - Updates on 2013-05
			if (b == "") {
				alert("Please enter a value in field");
				return (false);
			}
			if (b < 2009) {
				alert("Please enter a value for the loan amount greater than $2008.00!");
				document.myform.loanAmt.focus();
				return (false);
			}
			if (b > 999999000) {
				alert("Invalid value. Loan amount must be between 2009 and 999,999,000.00!");
				document.myform.loanAmt.focus();
				return (false);
			}
			lenderAmtdec = ("$" + b.toFixed(2));
			document.myform.lenderAmt.value= addCommas(lenderAmtdec);
			mtgTax1 = (((b) - 2000) * 0.00115).toFixed(2);
			mtgTax = addCommas ("$" + (((b) - 2000) * 0.00115).toFixed(2));
			document.myform.mtgTax.value = (mtgTax);
			b = RoundUp1000(b);
			var cand1 = 0; var cand2 = 0; var cand3 = 0; var cand4 = 0; var cand5 = 0; var cand6 = 0; var cand7 = 0; var cand8 = 0;
			if (b > 15000000) {cand1 = b - 15000000;}
			if (b > 10000000) {cand2 = b - 10000000 - cand1;}
			if (b > 5000000) {cand3 = b -  5000000 - cand1 - cand2;}
			if (b > 1000000) {cand4 = b -  1000000 - cand1 - cand2 - cand3;}
			if (b > 100000) {cand5 = b -  100000 - cand1 - cand2 - cand3 - cand4;}
			if (b > 50000) {cand6 = b -  50000 - cand1 - cand2 - cand3 - cand4 - cand5;}
			if (b > 35000) {cand7 = b -  35000 - cand1 - cand2 - cand3 - cand4 - cand5 - cand6;}
			if (b <= 35000) {cand8 = 1.25;}
			var premB = 148.75 + (cand8) + (cand7/1000 * 4.25) + (cand6/1000 *3.5) + (cand5/1000 * 2.5) + (cand4/1000 * 2) + (cand3/1000 * 1.50) + (cand2/1000 *1.25) + (cand1/1000 *1);
			lenderPremdec = ("$" + premB.toFixed(2));
			document.myform.lenderPrem.value = addCommas(lenderPremdec);
			closingIns = addCommas("$" + (665 + premB).toFixed(2));
			totalTax = mtgTax;
			totalClosing1 = (777 + ((((b) - 2000) * 0.00115) + premB)).toFixed(2);//190,30,30,90,275,50,112,rectax,b
			totalClosing = addCommas ("$" + totalClosing1);
			document.myform.totalClosing.value = (totalClosing);
			document.myform.closingIns.value = (closingIns)
			document.myform.totalTax.value = (totalTax);
			break;
		case "ShelbyRefi":
			var b = Number(document.myform.loanAmt.value) || 0;   // trap NaN entries
			//AKW - Updates on 2013-05
			if (b == "") {
				alert("Please enter a value in field");
				return (false);
			}
			if (b < 2009) {
				alert("Please enter a value for the loan amount greater than $2008.00!");
				document.myform.loanAmt.focus();
				return (false);
			}
			if (b > 999999000) {
				alert("Invalid value. Loan amount must be between 2009 and 999,999,000.00!");
				document.myform.loanAmt.focus();
				return (false);
			}
			lenderAmtdec = ("$" + b.toFixed(2));
			document.myform.lenderAmt.value= addCommas(lenderAmtdec);
			mtgTax1 = (((b) - 2000) * 0.00115).toFixed(2);
			mtgTax = addCommas ("$" + (((b) - 2000) * 0.00115).toFixed(2));
			document.myform.mtgTax.value = (mtgTax);
			b = RoundUp1000(b);
			var cand1 = 0; var cand2 = 0; var cand3 = 0;
			if (b > 1000000) {cand1 = b - 1000000;}
			if (b > 100000) {cand2 = b -  100000 - cand1;}
			if (b > 15000) {cand3 = b -  1000 - cand1 - cand2;}
			var premB = 105 + (cand3/1000 * 3.75) + (cand2/1000 * 3.25) + (cand1/1000 * 1);
			lenderPremdec = ("$" + premB.toFixed(2));
			document.myform.lenderPrem.value = addCommas(lenderPremdec);
			closingIns = addCommas("$" + (665 + premB).toFixed(2));
			totalTax = mtgTax;
			totalClosing1 = (777 + ((((b) - 2000) * 0.00115) + premB)).toFixed(2);//190,30,30,90,50,275,112,rectax,b
			totalClosing = addCommas ("$" + totalClosing1);
			document.myform.totalClosing.value = (totalClosing);
			document.myform.closingIns.value = "$495.00"
			document.myform.totalTax.value = (totalTax);
			break;
		case "DavidsonRefiReissue":
			var a = Number(document.myform.currcov.value) || 0;   // trap NaN entries
			if (a > 999999000) {
				alert("Invalid value. Current coverage must be between 0 and 999,999,000.00!");
				document.myform.currcov.focus();
				return (false);
			}
			var b = Number(document.myform.loanAmt.value) || 0;   // trap NaN entries
			//AKW - Updates on 2013-05
			if (a == "" || b == "") {
				alert("Please enter a value in field");
				return (false);
			}
			if (a > b) {
				//alert("The current coverage amount entered is greater than the new loan amount entered. Reissue credit is based on coverage up to the new loan amount. Press OK then press Calculate to continue.");
				a = b;
				//document.myform.currcov.value = document.myform.loanAmt.value;
				document.myform.loanAmt.focus();
				//return (false);
			}
			if (b < 2009) {
				alert("Please enter a value for the loan amount greater than $2008.00!");
				document.myform.loanAmt.focus();
				return (false);
			}
			if (b > 999999000) {
				alert("Invalid value. Loan amount must be between 2009 and 999,999,000.00!");
				document.myform.loanAmt.focus();
				return (false);
			}
			a = RoundUp1000(a);
			var band1 = 0; var band2 = 0; var band3 = 0; var band4 = 0; var band5 = 0; var band6 = 0; var band7 = 0;
			if (a > 15000000) {band1 = a - 15000000;}
			if (a > 10000000) {band2 = a - 10000000 - band1;}
			if (a > 5000000) {band3 = a - 5000000 - band1 - band2;}
			if (a > 1000000) {band4 = a - 1000000 - band1 - band2 - band3;}
			if (a > 500000) {band5 = a -  500000 - band1 - band2 - band3 - band4;}
			if (a > 100000) {band6 = a -  100000 - band1 - band2 - band3 - band4 - band5;}
			if (a > 1000) {band7 = a -  1000 - band1 - band2 - band3 - band4 - band5 - band6;}
			var premA = 200 + (band7/1000 * 6) + (band6/1000 * 4.5) + (band5/1000 * 3) + (band4/1000 * 2) + (band3/1000 * 1.5) + (band2/1000 * 1.25) + (band1/1000 *1);
			//end of Current Coverage calc
			///////////////////////////////////////////
			// begin Lenders Premium calc
			b = RoundUp1000(b);
			var cand1 = 0; var cand2 = 0; var cand3 = 0; var cand4 = 0; var cand5 = 0; var cand6 = 0; var cand7 = 0;
			if (b > 15000000) {cand1 = b - 15000000;}
			if (b > 10000000) {cand2 = b - 10000000 - cand1;}
			if (b > 5000000) {cand3 = b - 5000000 - cand1 - cand2;}
			if (b > 1000000) {cand4 = b - 1000000 - cand1 - cand2 - cand3;}
			if (b > 500000) {cand5 = b -  500000 - cand1 - cand2 - cand3 - cand4;}
			if (b > 100000) {cand6 = b -  100000 - cand1 - cand2 - cand3 - cand4 - cand5;}
			if (b > 1000) {cand7 = b -  1000 - cand1 - cand2 - cand3 - cand4 - cand5 - cand6;}
			var premB = 200 + (cand7/1000 * 6) + (cand6/1000 * 4.5) + (cand5/1000 * 3) + (cand4/1000 * 2) + (cand3/1000 * 1.5) + (cand2/1000 * 1.25) + (cand1/1000 *1);
			//////////////////////////////
			//begin reissue premium calc//
			/////////////////////////////
			lenderAmtdec = ("$" + b.toFixed(2));
			document.myform.lenderAmt.value= addCommas(lenderAmtdec);
			mtgTax1 = (((b) - 2000) * 0.00115).toFixed(2);
			mtgTax = addCommas ("$" + (((b) - 2000) * 0.00115).toFixed(2));
			document.myform.mtgTax.value = (mtgTax);
			reissueRate =  premB.toFixed(2) - (premA.toFixed(2) * 0.30);
			document.myform.reissueRate.value = addCommas("$" + reissueRate.toFixed(2));
			closingIns = addCommas("$" + (390 + premB - (premA * 0.30)).toFixed(2));
			totalTax = mtgTax;
			totalClosing1 = (((((b) - 2000) * 0.00115) + 503 + (premB.toFixed(2) - (premA.toFixed(2) * 0.30))).toFixed(2));
			totalClosing = addCommas ("$" + totalClosing1);
			document.myform.totalClosing.value = (totalClosing);
			document.myform.closingIns.value = "$495.00"
			document.myform.totalTax.value = (totalTax);
			break;
		case "HamiltonRefiReissue":
			var a = Number(document.myform.currcov.value) || 0;   // trap NaN entries
			if (a > 999999000) {
				alert("Invalid value. Current coverage must be between 0 and 999,999,000.00!");
				document.myform.currcov.focus();
				return (false);
			}
			var b = Number(document.myform.loanAmt.value) || 0;   // trap NaN entries
			//AKW - Updates on 2013-05
			if (a == "" || b == "") {
				alert("Please enter a value in field");
				return (false);
			}
			if (a > b) {
				//alert("The current coverage amount entered is greater than the new loan amount entered. Reissue credit is based on coverage up to the new loan amount. Press OK then press Calculate to continue.");
				a = b;
				//document.myform.currcov.value = document.myform.loanAmt.value;
				document.myform.loanAmt.focus();
				//return (false);
			}
			if (b < 2009) {
				alert("Please enter a value for the loan amount greater than $2008.00!");
				document.myform.loanAmt.focus();
				return (false);
			}
			if (b > 999999000) {
				alert("Invalid value. Loan amount must be between 2009 and 999,999,000.00!");
				document.myform.loanAmt.focus();
				return (false);
			}
			a = RoundUp1000(a);
			var band1 = 0; var band2 = 0; var band3 = 0; var band4 = 0; var band5 = 0; var band6 = 0;
			if (a > 15000000) {band1 = a - 15000000;}
			if (a > 10000000) {band2 = a - 10000000 - band1;}
			if (a > 5000000) {band3 = a - 5000000 - band1 - band2;}
			if (a > 1000000) {band4 = a - 1000000 - band1 - band2 - band3;}
			if (a > 100000) {band5 = a -  100000 - band1 - band2 - band3 - band4;}
			if (a > 1000) {band6 = a -  1000 - band1 - band2 - band3 - band4 - band5;}
			var premA = 200 + (band6/1000 * 6) + (band5/1000 * 3) + (band4/1000 * 2) + (band3/1000 * 1.5) + (band2/1000 * 1.25) + (band1/1000 *1);
			//end of Current Coverage calc
			///////////////////////////////////////////
			// begin Lenders Premium calc
			b = RoundUp1000(b);
			var cand1 = 0; var cand2 = 0; var cand3 = 0; var cand4 = 0; var cand5 = 0; var cand6 = 0;
			if (b > 15000000) {cand1 = b - 15000000;}
			if (b > 10000000) {cand2 = b - 10000000 - cand1;}
			if (b > 5000000) {cand3 = b - 5000000 - cand1 - cand2;}
			if (b > 1000000) {cand4 = b - 1000000 - cand1 - cand2 - cand3;}
			if (b > 100000) {cand5 = b -  100000 - cand1 - cand2 - cand3 - cand4;}
			if (b > 1000) {cand6 = b -  1000 - cand1 - cand2 - cand3 - cand4 - cand5;}
			var premB = 200 + (cand6/1000 * 6) + (cand5/1000 * 3) + (cand4/1000 * 2) + (cand3/1000 * 1.5) + (cand2/1000 * 1.25) + (cand1/1000 *1);
			//////////////////////////////
			//begin reissue premium calc//
			/////////////////////////////
			lenderAmtdec = ("$" + b.toFixed(2));
			document.myform.lenderAmt.value= addCommas(lenderAmtdec);
			mtgTax1 = (((b) - 2000) * 0.00115).toFixed(2);
			mtgTax = addCommas ("$" + (((b) - 2000) * 0.00115).toFixed(2));
			document.myform.mtgTax.value = (mtgTax);
			reissueRate =  premB.toFixed(2) - (premA.toFixed(2) * 0.30);
			document.myform.reissueRate.value = addCommas("$" + reissueRate.toFixed(2));
			closingIns = addCommas("$" + (390 + premB - (premA * 0.30)).toFixed(2));
			totalTax = mtgTax;
			totalClosing1 = (((((b) - 2000) * 0.00115) + 503 + (premB.toFixed(2) - (premA.toFixed(2) * 0.30))).toFixed(2));
			totalClosing = addCommas ("$" + totalClosing1);
			document.myform.totalClosing.value = (totalClosing);
			document.myform.closingIns.value = "$495.00"
			document.myform.totalTax.value = (totalTax);
			break;
		case "OtherRefiReissue":
			var a = Number(document.myform.currcov.value) || 0;   // trap NaN entries
			if (a > 999999000) {
				alert("Invalid value. Current coverage must be between 0 and 999,999,000.00!");
				document.myform.currcov.focus();
				return (false);
			}
			var b = Number(document.myform.loanAmt.value) || 0;   // trap NaN entries
			//AKW - Updates on 2013-05
			if (a == "" || b == "") {
				alert("Please enter a value in field");
				return (false);
			}
			if (a > b) {
				//alert("The current coverage amount entered is greater than the new loan amount entered. Reissue credit is based on coverage up to the new loan amount. Press OK then press Calculate to continue.");
				a = b;
				//document.myform.currcov.value = document.myform.loanAmt.value;
				document.myform.loanAmt.focus();
				//return (false);
			}
			if (b < 2009) {
				alert("Please enter a value for the loan amount greater than $2008.00!");
				document.myform.loanAmt.focus();
				return (false);
			}
			if (b > 999999000) {
				alert("Invalid value. Loan amount must be between 2009 and 999,999,000.00!");
				document.myform.loanAmt.focus();
				return (false);
			}
			a = RoundUp1000(a);
			var band1 = 0; var band2 = 0; var band3 = 0; var band4 = 0; var band5 = 0; var band6 = 0; var band7 = 0;
			if (a > 15000000) {band1 = a - 15000000;}
			if (a > 10000000) {band2 = a - 10000000 - band1;}
			if (a > 5000000) {band3 = a - 5000000 - band1 - band2;}
			if (a > 1000000) {band4 = a - 1000000 - band1 - band2 - band3;}
			if (a > 100000) {band5 = a - 100000 - band1 - band2 - band3 - band4;}
			if (a > 50000) {band6 = a -  50000 - band1 - band2 - band3 - band4 - band5;}
			if (a > 35000) {band7 = a -  35000 - band1 - band2 - band3 - band4 - band5 - band6;}
			var premA = 148.75 + (band7/1000 * 4.25) + (band6/1000 * 3.5) + (band5/1000 * 2.5) + (band4/1000 * 2) + (band3/1000 * 1.5) + (band2/1000 * 1.25) + (band1/1000 * 1);
			//end of Current Coverage calc
			///////////////////////////////////////////
			// begin Lenders Premium calc
			b = RoundUp1000(b);
			var cand1 = 0; var cand2 = 0; var cand3 = 0; var cand4 = 0; var cand5 = 0; var cand6 = 0; var cand7 = 0;
			if (b > 15000000) {cand1 = b - 15000000;}
			if (b > 10000000) {cand2 = b - 10000000 - cand1;}
			if (b > 5000000) {cand3 = b - 5000000 - cand1 - cand2;}
			if (b > 1000000) {cand4 = b - 1000000 - cand1 - cand2 - cand3;}
			if (b > 100000) {cand5 = b - 100000 - cand1 - cand2 - cand3 - cand4;}
			if (b > 50000) {cand6 = b - 50000 - cand1 - cand2 - cand3 - cand4 - cand5;}
			if (b > 35000) {cand7 = b - 35000 - cand1 - cand2 - cand3 - cand4 - cand5 - cand6;}
			var premB = 148.75 + (cand7/1000 * 4.25) + (cand6/1000 * 3.5) + (cand5/1000 * 2.5) + (cand4/1000 * 2) + (cand3/1000 * 1.5) + (cand2/1000 * 1.25) + (cand1/1000 * 1);
			//////////////////////////////
			//begin reissue premium calc//
			/////////////////////////////
			lenderAmtdec = ("$" + b.toFixed(2));
			document.myform.lenderAmt.value= addCommas(lenderAmtdec);
			mtgTax1 = (((b) - 2000) * 0.00115).toFixed(2);
			mtgTax = addCommas ("$" + (((b) - 2000) * 0.00115).toFixed(2));
			document.myform.mtgTax.value = (mtgTax);
			reissueRate =  premB.toFixed(2) - (premA.toFixed(2) * 0.30);
			document.myform.reissueRate.value = addCommas("$" + reissueRate.toFixed(2));
			closingIns = addCommas("$" + (665 + premB - (premA * 0.30)).toFixed(2));
			totalTax = mtgTax;
			totalClosing1 = (((((b) - 2000) * 0.00115) + 778 + (premB.toFixed(2) - (premA.toFixed(2) * 0.30))).toFixed(2));
			totalClosing = addCommas ("$" + totalClosing1);
			document.myform.totalClosing.value = (totalClosing);
			document.myform.closingIns.value = "$495.00"
			document.myform.totalTax.value = (totalTax);
			break;
		case "ShelbyRefiReissue":
			var a = Number(document.myform.currcov.value) || 0;   // trap NaN entries
			if (a > 999999000) {
				alert("Invalid value. Current coverage must be between 0 and 999,999,000.00!");
				document.myform.currcov.focus();
				return (false);
			}
			var b = Number(document.myform.loanAmt.value) || 0;   // trap NaN entries
			//AKW - Updates on 2013-05
			if (a == "" || b == "") {
				alert("Please enter a value in field");
				return (false);
			}
			if (a > b) {
				//alert("The current coverage amount entered is greater than the new loan amount entered. Reissue credit is based on coverage up to the new loan amount. Press OK then press Calculate to continue.");
				a = b;
				//document.myform.currcov.value = document.myform.loanAmt.value;
				document.myform.loanAmt.focus();
				//return (false);
			}
			if (b < 2009) {
				alert("Please enter a value for the loan amount greater than $2008.00!");
				document.myform.loanAmt.focus();
				return (false);
			}
			if (b > 999999000) {
				alert("Invalid value. Loan amount must be between 2009 and 999,999,000.00!");
				document.myform.loanAmt.focus();
				return (false);
			}
			a = RoundUp1000(a);
			var band1 = 0; var band2 = 0; var band3 = 0
			if (a > 1000000) {band1 = a - 1000000;}
			if (a > 100000) {band2 = a - 100000 - band1;}
			if (a > 1000) {band3 = a -  1000 - band1 - band2;}
			var premA = 105 + (band3/1000 * 3.75) + (band2/1000 * 3.25) + (band1/1000 * 1);
			//end of Current Coverage calc
			///////////////////////////////////////////
			// begin Lenders Premium calc
			b = RoundUp1000(b);
			var cand1 = 0; var cand2 = 0; var cand3 = 0;
			if (b > 1000000) {cand1 = b - 1000000;}
			if (b > 100000) {cand2 = b -  100000 - cand1;}
			if (b > 1000) {cand3 = b -  1000 - cand1 - cand2;}
			var premB = 105 + (cand3/1000 * 3.75) + (cand2/1000 * 3.25) + (cand1/1000 * 1);
			//////////////////////////////
			//begin reissue premium calc//
			/////////////////////////////
			lenderAmtdec = ("$" + b.toFixed(2));
			document.myform.lenderAmt.value= addCommas(lenderAmtdec);
			mtgTax1 = (((b) - 2000) * 0.00115).toFixed(2);
			mtgTax = addCommas ("$" + (((b) - 2000) * 0.00115).toFixed(2));
			document.myform.mtgTax.value = (mtgTax);
			reissueRate =  premB.toFixed(2) - (premA.toFixed(2) * 0.30);
			document.myform.reissueRate.value = addCommas("$" + reissueRate.toFixed(2));
			closingIns = addCommas("$" + (665 + premB - (premA * 0.30)).toFixed(2));
			totalTax = mtgTax;
			totalClosing1 = (((((b) - 2000) * 0.00115) + 778 + (premB.toFixed(2) - (premA.toFixed(2) * 0.30))).toFixed(2));
			totalClosing = addCommas ("$" + totalClosing1);
			document.myform.totalClosing.value = (totalClosing);
			document.myform.closingIns.value = "$495.00"
			document.myform.totalTax.value = (totalTax);
			break;
		default:
			calc(akw_global_var_form);
	}
}

//AKW - Set the title of this page
function akwSetTitle(akwtitle){
	document.title = akwtitle;
	$("#akwH1Title").text(akwtitle);
}

//AKW - OnLoad functions - Project specific
function akwOnLoad(){
	$("#frm_login").attr("action","../documents/centraladmin.php?pageid="+akw_global_var_pid);
	$("#akw_additional_js").attr("src","../documents/centraladmin.php?process=logged&amp;pageid="+akw_global_var_pid);
	$("#akwhiddenid").val(akw_global_var_pid);
}

//AKW - Clear values on form
function akwResetForm(){
	//AKW - Info: To be based on DavidsonPur, as we compared them with DavidsonPur.
	if ($('input[name="purchPrice"]').length > 0) { $('input[name="purchPrice"]').val(""); }
	if ($('input[name="currcov"]').length > 0) { $('input[name="currcov"]').val(""); }
	if ($('input[name="loanAmt"]').length > 0) { $('input[name="loanAmt"]').val(""); }

	if ($('input[name="closingIns"]').length > 0) { $('input[name="closingIns"]').val(""); }
	if ($('input[name="searchExam"]').length > 0) { $('input[name="searchExam"]').val(""); }
	if ($('input[name="wireFee"]').length > 0) { $('input[name="wireFee"]').val("$50.00"); }
	if ($('#Text25').length > 0) { $('#Text25').val("$395.00"); } //AKW - ClosingFee
	if ($('#Text7').length > 0) { $('#Text7').val(""); }	//AKW - SimRate
	if ($('#Text24').length > 0) { $('#Text24').val(""); }	//AKW - LenderPrem
	if ($('input[name="lenderAmt"]').length > 0) { $('input[name="lenderAmt"]').val(""); }
	if ($('input[name="ownerAmt"]').length > 0) { $('input[name="ownerAmt"]').val(""); }
	if ($('input[name="totalRec"]').length > 0) { $('input[name="totalRec"]').val("$131.00"); }
	if ($('input[name="deedRec"]').length > 0) { $('input[name="deedRec"]').val("$18.00"); }
	if ($('input[name="mtgRec"]').length > 0) { $('input[name="mtgRec"]').val("$113.00"); }
	if ($('input[name="totalTax"]').length > 0) { $('input[name="totalTax"]').val(""); }
	if ($('input[name="deedTax"]').length > 0) { $('input[name="deedTax"]').val(""); }
	if ($('input[name="mtgTax"]').length > 0) { $('input[name="mtgTax"]').val(""); }
	if ($('input[name="totalClosing"]').length > 0) { $('input[name="totalClosing"]').val(""); }
}

//AKW - Switching function for the calculators
function akwSwitchCalc(county, transaction){
	var defaultcounty = "Davidson";
	var defaulttransaction = "Purchase";

	if (county == "Davidson"){
		switch (transaction){
			case "Purchase":
				akw_global_var_form = "DavidsonPur";
				akwConstructForm("DavidsonPur");
				break;
			case "Refi":
				akw_global_var_form = "DavidsonRefi";
				akwConstructForm("DavidsonRefi");
				break;
			case "Reissue":
				akw_global_var_form = "DavidsonRefiReissue";
				akwConstructForm("DavidsonRefiReissue");
				break;
			default:
				akwSwitchCalc(defaultcounty, defaulttransaction);
		}
	}else if (county == "Hamilton"){
		switch (transaction){
			case "Purchase":
				akw_global_var_form = "HamiltonPur";
				akwConstructForm("HamiltonPur");
				break;
			case "Refi":
				akw_global_var_form = "HamiltonRefi";
				akwConstructForm("HamiltonRefi");
				break;
			case "Reissue":
				akw_global_var_form = "HamiltonRefiReissue";
				akwConstructForm("HamiltonRefiReissue");
				break;
			default:
				akwSwitchCalc(defaultcounty, defaulttransaction);
		}
	}else if (county == "Shelby"){
		switch (transaction){
			case "Purchase":
				akw_global_var_form = "ShelbyPur";
				akwConstructForm("ShelbyPur");
				break;
			case "Refi":
				akw_global_var_form = "ShelbyRefi";
				akwConstructForm("ShelbyRefi");
				break;
			case "Reissue":
				akw_global_var_form = "ShelbyRefiReissue";
				akwConstructForm("ShelbyRefiReissue");
				break;
			default:
				akwSwitchCalc(defaultcounty, defaulttransaction);
		}
	}else if (county == "Other"){
		switch (transaction){
			case "Purchase":
				akw_global_var_form = "OtherPur";
				akwConstructForm("OtherPur");
				break;
			case "Refi":
				akw_global_var_form = "OtherRefi";
				akwConstructForm("OtherRefi");
				break;
			case "Reissue":
				akw_global_var_form = "OtherRefiReissue";
				akwConstructForm("OtherRefiReissue");
				break;
			default:
				akwSwitchCalc(defaultcounty, defaulttransaction);
		}
	}else{
		alert("AKWERR-FUNC0001 : The function can not be used. Please contact your administrator.");
	}
}

/**
Original functions from original js
*/
function newWindow(popUp) {
        popWindow = window.open(popUp, "popWin", "width=370, height=350, scrollbars=yes");
        popWindow.focus();
    }

function resetInputs() {}

function RoundUp1000(V) { return Math.ceil((V / 1000))*1000; }

function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

function searchKeyPress(e) {
    if (window.event) {
        e = window.event;
    }
    if (e.keyCode == 13) {
        document.getElementById('btnSearch').click();
    }
}

function Checkbox2_onclick() {
}

/**
Original functions from Refi Reissue js
*/
//AKW - This is the main root function - Call mouse capture handler function on page load
captureMouse();
//CUSTOM VARS - Initialized below
var v_divname;
var v_text;
var v_title;
var v_xoffset;
var v_yoffset;
var v_backcolor;
var v_bordercolor;
var v_textcolor;
var v_titletextcolor;
var v_width;
var v_border;
var v_title_padding;
var v_content_padding;
var v_fontface;
var v_fontsize;
var v_titlefontsize;
//INTERNAL VARIABLES
var v_xcoordinate = 0;
var v_ycoordinate = 0;
var v_visible = 0;
var v_havemouse = 0;
var v_layer = null;
function tooltip(displaytext, title, commands) {
	//Reset variables for this tool tip
	init_tooltip();
	//Title and Text
	v_title=title;
	v_text=displaytext;
	//Parse commands if any
	parseCommands(commands);
	if (v_layer) {
		v_layer=getLayer(v_divname);
	}
	if (!(v_layer=createDivContainer())) {
		return false;
	}
	mainMethod();
}
function init_tooltip() {
	v_divname = 'tiplayer';
	v_text = 'Default Text';
	v_title = '';
	//UI Variables
	v_xoffset = 15;
	v_yoffset = 15;
	v_backcolor = '#FFFFCC';
	v_bordercolor = '#FFCC66';
	v_textcolor = '#000000';
	v_titletextcolor = '#000000';
	v_width = 300;
	v_border = 2;
	v_title_padding = '1px';
	v_content_padding = '1px 3px';
	v_fontface = 'Arial, Helvetica, Sans-Serif';
	v_fontsize = 14;
	v_titlefontsize = 14;
	//SYSTEM VARIABLES
	v_visible = 0;
	v_layer = null;
}
function parseCommands(commands) {
	if (commands !== null) {
		var comArray = commands.split(',');
		for (var i = 0; i < comArray.length; i++) {
			var args = comArray[i].split(':');
			eval('v_' + trimWhitespace(args[0]) + '="' + trimWhitespace(args[1]) + '"');
		}
	}
}
// Clears popups if appropriate
function hideTip() {
	if (v_visible == 1) {
		if (v_layer !== null) {
			v_layer.style.visibility = 'hidden';
			v_visible = 0;
		}
	}
	return true;
}
function mainMethod() {
	v_visible = 0;
	var html = makeHTML(v_text, v_title);
	createPopup(html);
	//if we have mouse coordinates, position layer and make visible
	if (v_havemouse == 1) {
		positionLayer();
		v_visible = 1;
		v_layer.style.visibility = 'visible';
	}
}
function makeHTML(text, title) {
	var container_style = 'width:' + v_width + 'px;';
	container_style += 'border:' + v_border + 'px solid ' + v_bordercolor + ';';
	container_style += 'background-color:' + v_backcolor + ';';
	container_style += 'font-family:' + v_fontface + ';';
	container_style += 'font-size:' + v_fontsize + 'px;';
	var title_style = 'background-color:' + v_bordercolor + ';';
	title_style += 'padding:' + v_title_padding + ';';
	title_style += 'color:' + v_titletextcolor + ';';
	var content_style = 'padding:' + v_content_padding + ';';
	content_style += 'color:' + v_textcolor + ';';
	var txt = '<div id="skinnytip_container" style="' + container_style + '">';
	if (title!==null && title.length>0) {
		txt += '<div id="skinnytip_title" style="' + title_style + '">' + title + '</div>';
	}
	txt += '<div id="skinnytip_content" style="' + content_style + '">' + text + '</div>';
	txt += '</div>';
	return txt;
}
//Positions popup according to mouse input
function positionLayer() {
	var placeX = 300;
	var placeY = 300;
	//get final placement
	placeX = horizontalPlacement();
	placeY = verticalPlacement();
	//Move the object
	v_layer.style.left = placeX + 'px';
	v_layer.style.top = placeY + 'px';
}
//called when the mouse moves
//sets mouse related variables
function mouseMoveHandler(e) {
	if (!e) {
		e = event;
	}
	if (e.clientX) {
	 //if there is an x pos property
	 //GET MOUSE LOCATION
		v_xcoordinate = mouseX(e);
		v_ycoordinate = mouseY(e);
		v_havemouse = 1;
	}
	if (v_visible == 1) {
		positionLayer();
	}
}
//get mouse x coordinate
function mouseX(evt) {
	if (evt.pageX) return evt.pageX;
	else if (evt.clientX) {
	   return evt.clientX + (document.documentElement.scrollLeft ?
	   document.documentElement.scrollLeft :
	   document.body.scrollLeft);
	}
	else {
		return null;
	}
}
//get mouse y coordinate
function mouseY(evt) {
	if (evt.pageY) {
		return evt.pageY;
	}
	else if (evt.clientY) {
	   return evt.clientY + (document.documentElement.scrollTop ?
	   document.documentElement.scrollTop :
	   document.body.scrollTop);
	}
	else {
		return null;
	}
}
//Set mouse handler
function captureMouse() {
	document.onmousemove = mouseMoveHandler;
}
//Creates the popup
function createPopup(input) {
	var popupwidth = v_width;
	var text;
	var zindex;
	text =  createBackLayer(popupwidth,zindex++);
	text += '<div style="position: absolute; top: 0; left: 0; width: ' + popupwidth + 'px; z-index: ' + zindex + ';">' + input + '</div>';
	if (typeof v_layer.innerHTML != 'undefined') {
		v_layer.innerHTML = text;
	}
	//After writing html measure height of backlayer to set height of iframe
	var backlayer=self.document.getElementById("backdrop");
	var container=self.document.getElementById("skinnytip_container");
	backlayer.height = container.offsetHeight;
}
//Back layer prevents forms from showing through popups
function createBackLayer(width, Z) {
	//Create backdrop with 0 height
	return '<iframe id="backdrop" frameborder="0" scrolling="no" width="' + width + '" height="0" style="z-index: ' + Z + '; filter: Beta(Style=0,Opacity=0);"><p></iframe>';
}
//get horizontal box placement
function horizontalPlacement() {
	placeX = v_xcoordinate + v_xoffset;
	return placeX;
}
//get vertical box placement
function verticalPlacement() {
	return v_ycoordinate + v_yoffset;
}
// create the div container for popup content if it doesn't exist
function createDivContainer() {
	var divContainer = self.document.getElementById(v_divname);
	return divContainer;
}
function trimWhitespace(str) {
	while(str.charAt(0) == (" ") ) {
		str = str.substring(1);
	}
	while(str.charAt(str.length-1) == " " ) {
		str = str.substring(0,str.length-1);
	}
	return str;
}

!function(e){function o(r){if(t[r])return t[r].exports;var n=t[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}var t={};return o.m=e,o.c=t,o.p="",o(0)}([function(e,o,t){var r=t(1),n=t(2),i=n.StringsVariantId;r.registerSource("str",function(e,o){switch(e.MOBILE_STR_Header_Brand="Microsoft account",e.WF_STR_HeaderDefault_Title=o.Bk===i.CombinedSigninSignup?"Hi there!":o.BO,o.Bk){case i.SkypeMoveAlias:e.WF_STR_Default_Desc="To continue, verify the password for your Microsoft account.";break;case i.CombinedSigninSignup:case i.CombinedSigninSignupDefaultTitle:e.WF_STR_Default_Desc='This works with Microsoft accounts. Let’s see if you have one. <a href="#" id="learnMoreLink" target="_top">What’s this?</a>';break;default:e.WF_STR_Default_Desc=o.i?"Use your work or school account, or your personal Microsoft account.":'Use your Microsoft account. <a href="#" id="learnMoreLink" target="_top">What’s this?</a>'}e.WF_STR_LearnMoreLink_Text="What's this?",e.WF_STR_ProgressText="Please wait",e.WF_STR_ThisIsntMyNumber_Text="This isn't my number",e.MOBILE_STR_Footer_Microsoft="Microsoft",e.MOBILE_STR_Footer_Privacy="Privacy & Cookies",e.MOBILE_STR_Footer_Terms="Terms of Use",e.WF_STR_Footer_LinkDisclaimer_Text="Link Disclaimer",e.WF_STR_GenericError_Title="Something went wrong and we can't sign you in at the moment. Please try again later.",e.CT_PWD_STR_Email_Example=o.B&&o.h?"Email, phone or Skype name":o.A?"Email or phone":"someone@example.com",e.CT_STR_CountryCodeError="Please verify the country code.",e.CT_PWD_STR_PwdTB_Label="Password",e.CT_WPIL_STR_Android_UseDifferentAddress="Use a different account",e.CT_PWD_STR_ForgotPwdLink_Text="Forgotten my password",e.CT_PWD_STR_ForgotPwdLink_SplitterText="What kind of account do you have?",e.CT_PWD_STR_KeepMeSignedInCB_Text="Keep me signed in",e.CT_PWD_STR_SignIn_Button="Sign in",e.CT_PWD_STR_SignIn_Button_Next="Next",e.CT_PWD_STR_SwitchToOTC_Link="Sign in with a single-use code",e.CT_PWD_STR_SwitchToRemoteNGC_Link="Use an app instead",e.CT_PWD_STR_Error_InvalidUsername=o.B&&o.h?"Please enter a valid email address, phone number or Skype name.":o.A?"Please enter your phone number, or your email address in the format someone@example.com.":"Please type your email address in the format someone@example.com.",e.CT_PWD_STR_Error_GetCredentialTypeError="There was an issue with looking up your account. Tap Next to try again.",e.CT_PWD_STR_Error_InvalidPhoneNumber="That phone number doesn't look right. Please check the country code and phone number.",e.CT_PWD_STR_Error_InvalidPhoneFormatting="The phone number that you entered isn't valid. Your phone number can contain numbers, spaces and these special characters: ( ) [ ] . - # * /",e.CT_PWD_STR_Error_MissingPassword="Please enter the password for your Microsoft account.",e.CT_PWD_STR_Error_PasswordTooLong="Microsoft account passwords can contain up to 16 characters. If you've been using a password that has more than 16 characters, enter the first 16.",e.CT_PWD_STR_Error_FedNotAllowed="You cannot use this account for this purpose because it belongs to an organisation. Please choose a different account or sign up for a new one.",e.CT_PWD_STR_Error_UsernameNotExist=o.Ah?'That Microsoft account doesn’t exist. Enter a different account or <a href="#~#WLSignUpURL_LS#~#" id="idA_PWD_SignUp">get a new one</a>.':"That Microsoft account doesn't exist. Please enter a different account.",e.CT_FED_STR_ChangeUserLink_Text="Sign in with a different Microsoft account",e.CT_FED_STR_GoThereLink_Text="Sign in at #~#partnerdomain#~#",e.WF_STR_ForceSI_Info="Because you're accessing sensitive info, you need to verify your password for {0}.",e.WF_STR_SwitchUser_Title="You're already signed in.",e.WF_STR_SwitchUser_Stay="Remain signed in with this account.",e.WF_STR_SwitchUser_Switch="Sign out and sign in with a different account.",e.WF_STR_Switch_SignOutDesc="(You will be signed out of all Microsoft services you are using currently with your #~#FederatedDomainName_LS#~# account.)",e.WF_STR_Switch_DifferentID="Sign in with a different Microsoft account",e.WF_STR_InviteBlocked_Error="Sorry, you can't use your #~#FederatedDomainName_LS#~# account to sign in here.",e.WF_STR_ServiceBlocked_Error="Sorry, we can't sign you in here with your #~#FederatedDomainName_LS#~# account.",e.WF_STR_IDPFailed_GenericError="Your organisation could not sign you in to this service.",e.WF_STR_IDPFailed_Error="#~#FederatedPartnerName_LS#~# could not sign you in here.",e.WF_STR_IDPFailed_Desc1="Your #~#FederatedDomainName_LS#~# account may not be enabled to use this service or there may be a system error at #~#FederatedPartnerName_LS#~#.",e.WF_STR_IDPFailed_Desc2=" Please try again later, and contact the administrator at #~#FederatedPartnerName_LS#~# if this problem persists.",e.WF_STR_IDPFailed_GenericDesc="Please try again later, and contact the administrator at your organisation if this problem persists.",e.MOBILE_STR_SignIn_MSAcctHelpHeading="What is a Microsoft account?",e.MOBILE_STR_SignIn_MSAcctHelpDesc="A Microsoft account is what you use to sign in to Microsoft services such as Outlook.com, Skype, OneDrive, Office, Xbox, Windows and more. Sign in for your personalised experience.",e.MOBILE_STR_SignIn_MSAcctHelpDone_Button="OK",e.CT_HIP_ID_P_HipLockout_Info="Help us make sure you're not a robot.",e.CT_HIP_STR_HIP_ISLOADING="Loading ...",e.WF_STR_Lockout_AnotherID_Text="Sign in using another Microsoft account",e.WF_STR_Lockout_Title="Sign-in is blocked",e.WF_STR_Lockout_Desc="Sign-in with <b>#~#MemberName_LS#~#</b> is blocked for one of these reasons:",e.WF_STR_Lockout_Reason1="Someone entered the wrong password too many times.",e.WF_STR_Lockout_Reason2="If you signed up for this account through an organisation, you might not be able to use it yet.",e.WF_STR_Lockout_Reset_Text="Reset your password",e.WF_STR_HIP_Label="Enter these characters",e.WF_STR_HIPAudio_Label="Enter the characters you hear",e.CT_PWD_STR_Continue_Button="Continue",e.CT_PWD_STR_ContinueBtn_Tooltip="You are signed in on this computer with this Microsoft account.",e.CT_PWD_STR_SignedIn_Label="You're already signed in",e.CT_HRD_STR_Redirect_Title="Redirecting",e.CT_HRD_STR_Splitter_Heading="It looks like this email address is being used with more than one account from Microsoft. Which one do you want to use?",e.CT_HRD_STR_Splitter_AadTile_Title="Work or school account",e.CT_HRD_STR_Splitter_AadTile_Hint="Created by your IT department",e.CT_HRD_STR_Splitter_MsaTile_Title="Personal account",e.CT_HRD_STR_Splitter_MsaTile_Hint="Created by you",e.CT_HRD_STR_Splitter_Back="Back",e.WF_STR_FIDO_ReAuthUserPrompt="Use your PIN or Windows Hello to prove that you own {0}",e.CT_IL_STR_Error_OldSkypePwd="Your old Skype password no longer works. Try the password for your Microsoft account.",e.CT_PWD_STR_EnterPassword_Title="Enter password",e.CT_PWD_STR_EnterPassword_Desc="Enter the password for {0}",e.CT_OTC_STR_SignIn_ReSendInfo="It may take a few minutes for the code to arrive. Are you sure you want to request a new code?",e.CT_OTC_STR_YesButton_Text="Yes",e.CT_OTC_STR_NoButton_Text="No",e.CT_OTC_STR_EnterCode_Title="Enter code",e.CT_OTC_STR_EnterCode_Desc="We've just sent a code to {0}",e.CT_OTC_STR_EnterCode_Text="Code",e.CT_OTC_STR_Error_EmptyCode="To continue, enter the code we've just sent you.",e.CT_OTC_STR_Error_CodeIncorrect="That code didn't work. Check the code and try again.",e.CT_OTC_STR_Error_ServerError="This service isn't available right now. Please try again later.",e.CT_OTC_STR_Error_OTCInvalid="Please enter the 7-digit code. The code only contains numbers.",e.CT_OTC_STR_Error_SendCodeError="We couldn't send the code. Please try again.",e.CT_OTC_STR_SMSTextbox_Label2="Phone number",e.CT_RNGC_STR_TimeOut_Title="Request timeout",e.CT_RNGC_STR_TimeOut_PageDescription="We sent a sign-in request to your Microsoft Authenticator app for {0}, but we didn't get your approval.",e.CT_RNGC_STR_Denied_Title="Request denied",e.CT_RNGC_STR_Denied_PageDescription="We sent a sign-in request to your Microsoft Authenticator app for {0}, but you denied it.",e.CT_RNGC_STR_Polling_Title="Approve Sign-in",e.CT_RNGC_STR_Polling_PageDescription="Approve request on your phone to sign in with {0}.",e.CT_RNGC_STR_Polling_PageDescription_UnfamiliarDevice="Tap the number you see below in your Microsoft Authenticator app to sign in with {0}",e.CT_RNGC_STR_ResendNotification_Text="Tap Next to send another request.",e.CT_RNGC_STR_SwitchToPassword_Link="Use your password instead",e.CT_RNGC_STR_SwitchToQrCode_Link="Scan a QR code instead",e.CT_RNGC_STR_QR_PageDescription="Scan the QR code to sign in with {0}.",e.CT_RNGC_STR_SwitchToPolling_Link="Approve a push notification instead",e.CT_RNGC_STR_QR_Timeout_Title="Request timeout",e.CT_RNGC_STR_QR_Timeout_PageDescription="We didn't hear from you in time. Tap Next if you want to try again.",e.CT_RNGC_STR_Error_Title_SendFail="Request wasn't sent",e.CT_RNGC_STR_Error_SendFail="We couldn't send a notification to your phone at this time. Please try again.",e.CT_RNGC_STR_Request="We couldn't send a notification to your phone at this time. Please try again."}),r.registerSource("html",function(e,o){e.CT_FED_STR_FedDomainMsg="To sign in to this account you need to go to #~#partnerdomain#~#.",e.WF_STR_SignUpLink_Text='No account? <a href="#" id="signup">Create one!</a>',e.CT_OTC_STR_SendCode_SessionExpired='Your session has timed out. To request a single-use code, please <a href="#" id="idA_ReloadPage">refresh the page</a>.',e.UT_STR_LWADisclaimer_Info=o.aV,e.CT_HRD_STR_Redirect_Heading='Taking you to the sign-in page for your organisation. <a id="aadRedirectCancel" href="#">Cancel</a>',e.CT_HRD_STR_Splitter_Rename='Tired of seeing this? <a href="#" id="iDisambigRenameLink">Rename your personal Microsoft account.</a>',1===o.AK?(e.CT_PWD_STR_Error_WrongCreds=o.c?"The password is incorrect. Please try again.":o.A?'Your account or password is incorrect. If you don’t remember your password, <a id="idA_IL_ForgotPassword0" href="">reset it now.</a>':'Your email address or password is incorrect. If you can\'t remember your password, <a id="idA_IL_ForgotPassword0" href="">reset it now.</a>',e.CT_IHL_STR_Error_WrongHip='Enter your password and the characters correctly. If you can\'t remember your password, <a id="idA_IHL_ForgotPassword0" href="">reset it now.</a>'):(e.CT_PWD_STR_Error_WrongCreds=o.c?"The password is incorrect. Please try again.":o.A?'Your account or password is incorrect. If you don’t remember your password, <a id="idA_IL_ForgotPassword0" href="">continue without a Microsoft account.</a>':'Your email address or password is incorrect. If you can\'t remember your password, <a id="idA_IL_ForgotPassword0" href="">continue without a Microsoft account.</a>',e.CT_IHL_STR_Error_WrongHip='Enter your password and the characters correctly. If you can\'t remember your password, <a id="idA_IHL_ForgotPassword0" href="">continue without a Microsoft account.</a>')})},function(e,o){function t(){var e=this,o={};e.registerSource=function(e,t){o[e]=o[e]||[],o[e].push(t)},e.getStrings=function(e,t){for(var r={},n=o[e]||[],i=0,a=n.length;i<a;i++)n[i](r,t);return r}}var r=window;r.StringRepository=e.exports=r.StringRepository||new t},function(e,o){o.Tokens={Username:"#~#MemberName_LS#~#"},o.Fed={DomainToken:"#~#partnerdomain#~#",FedDomain:"#~#FederatedDomainName_LS#~#",Partner:"#~#FederatedPartnerName_LS#~#"},o.LoginOption={RememberPWD:1,NothingChecked:3},o.StringsVariantId={Default:0,SkypeMoveAlias:1,CombinedSigninSignup:2,CombinedSigninSignupDefaultTitle:3}}]),window.__DefaultLoginPaginatedStrings=!0;
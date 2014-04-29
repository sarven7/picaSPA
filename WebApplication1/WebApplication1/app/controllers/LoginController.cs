using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace PicaClientJQuery.Controllers
{
    public class LoginController : Controller
    {
        private const string TokenCallbackMethod = "Callback";
        public const string PicaService = "https://dstcontrols.pica.pipreview.com";
        private const string TokenServiceFormat = "{0}/Token?callback={1}";

        public RedirectResult Index()
        {
            // Disable certificate validation for testing purposes
            ServicePointManager.ServerCertificateValidationCallback = delegate { return true; };

            // Format a callback string
            string controller = Request.RequestContext.RouteData.Values["controller"].ToString();
            string callback = string.Format("{0}://{1}{2}{3}/{4}", Request.Url.Scheme, Request.Url.Authority, Url.Content("~"), controller, TokenCallbackMethod);

            // Format the token query string
            string redirectUri = string.Format(TokenServiceFormat, PicaService, HttpUtility.UrlEncode(callback));

            // Redirect to authenticate
            return Redirect(redirectUri);
        }

        public ActionResult Callback()
        {
            // Redirect back to our main page
            return RedirectToAction("Index", "Home");
        }

    }
}

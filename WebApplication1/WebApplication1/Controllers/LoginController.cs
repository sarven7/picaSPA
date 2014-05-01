using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using System.Web.Http.Results;


namespace WebApplication1.Controllers
{
    public class LoginController : ApiController
    {
        private const string TokenCallbackMethod = "Callback";
        public const string PicaService = "https://dstcontrols.pica.pipreview.com";
        private const string TokenServiceFormat = "{0}/Token?callback={1}";

        [HttpGet]
        public RedirectResult Index()
        {
            // Disable certificate validation for testing purposes
            ServicePointManager.ServerCertificateValidationCallback = delegate { return true; };

            // Format a callback string
            string callback = string.Format("http://localhost:60646/#/");

            // Format the token query string
            string redirectUri = string.Format(TokenServiceFormat, PicaService, HttpUtility.UrlEncode(callback));

            // Redirect to authenticate
            return Redirect(redirectUri);
        }
    }
}
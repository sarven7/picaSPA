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
        //private const string TokenCallbackMethod = "Callback";
        public const string PicaService = "https://dstcontrols.pica.pipreview.com";
        private const string TokenServiceFormat = "{0}/Token?callback={1}";

        [HttpGet]
        public RedirectResult Index()
        {
            // Disable certificate validation for testing purposes
            ServicePointManager.ServerCertificateValidationCallback = delegate { return true; };

            // Format a callback string
            string callback = string.Format("http://localhost:60646/#/saveToken");

            // Format the token query string
            string redirectUri = string.Format(TokenServiceFormat, PicaService, HttpUtility.UrlEncode(callback));

            // Redirect to authenticate
            return Redirect(redirectUri);
        }

        //[HttpGet]
        //public void Callback()
        //{

        //    //HttpContext.Current.Response.RedirectLocation = string.Format("http://localhost:60646/#/search");
        //    var cookie = new HttpCookie("token", (Request.RequestUri.Query.Replace("?access_token=", "") + "; domain=dstcontrols.pica.pipreview.com; path=/; secure; httponly"));
        //    HttpContext.Current.Request.Cookies.Add(cookie);
        //    HttpContext.Current.Response.Cookies.Add(cookie);

        //    HttpContext.Current.Response.RedirectPermanent(string.Format("http://localhost:60646/#/search"));
            
            
            
        //    //set redirect to search page
        //    //var redirect = Redirect(string.Format("http://localhost:60646/#/search"));

        //    //add the retrieved cookie
        //    //redirect.Request.Headers.Add("Set-Cookie", (Request.RequestUri.Query.Replace("?access_", "") + "; domain=dstcontrols.pica.pipreview.com; path=/; secure; httponly"));

        //    //go
        //    return;
        //}
    }
}
using System;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;


[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(WebApplication1.App_Start.WebApiConfig), "Register")]
namespace WebApplication1.App_Start
{
    public class WebApiConfig
    {
        public static void Register()
        {
            //RouteTable.Routes.MapRoute(
            //    name:"Login",
            //    url:"{controller}/{action}/{id}",
            //    defaults: new { controller = "Login", action = "Index", id = RouteParameter.Optional }
            //);

            GlobalConfiguration.Configuration.Routes.MapHttpRoute(
                name: "login",
                routeTemplate: "{controller}/{action}"
            );

        }
    }
}
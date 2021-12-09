using RestSharp;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Script.Serialization;

namespace Connect.FetchConfig
{
    public class Mailer
    {
        public void SendMail(string name, string emailaddress, string email_message, string title) {

            var client = new RestClient("https://portal.ortigasland.com.ph/api/Mailer/SendMail");
            client.Timeout = -1;
            var request = new RestRequest(Method.POST);
            request.AlwaysMultipartFormData = true;
            request.AddParameter("api_key", "TGafNFrXAApNChCH8IFy8sDOp4PgYAKz");
            request.AddParameter("body_json", "{\"Subject\":\""+title+"\",\"ToName\": \"" + name +
                "\",\"ToEmail\": \"" + emailaddress
                + "\",\"HtmlBody\": \"<!DOCTYPE html><html  ><head></head><body>" + email_message + "</body></html>\",\"Title\":\"testing\"}");
            request.AddParameter("user", "ORTIGASMALL");
            IRestResponse response = client.Execute(request);
            Console.WriteLine(response.Content);
        }
     
       
    }
}

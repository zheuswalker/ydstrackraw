using System.Web.Configuration;

namespace Connect.FetchConfig
{
    public static class FetchConfig
    {
        public static string GetConfig(string key)
        {
            return WebConfigurationManager.AppSettings[key];
        }
    }
}

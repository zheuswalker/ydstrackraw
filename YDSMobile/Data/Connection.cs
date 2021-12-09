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
    public class Connection
    {

        public string Call(string endpoint, Method method, string[][] paramsbindings) {
            endpoint = FetchConfig.GetConfig("HOST") +FetchConfig.GetConfig(endpoint);
            var client = new RestClient(endpoint);
            client.Timeout = -1;
            var request = new RestRequest(method);
            request.AlwaysMultipartFormData = true;
            if (paramsbindings.Length > 0)
            {
                for (int iterate = 0; iterate < paramsbindings.Length; iterate++)
                {
                    request.AddParameter(paramsbindings[iterate][0], paramsbindings[iterate][1]);
                }
            }
            IRestResponse response = client.Execute(request);
            return response.Content;

        }

        public DataTable Start(string procedurename, string[][] paramsbindings)
        {
            string Constring = FetchConfig.GetConfig("DB_CONF");
            SqlConnection connection = new SqlConnection(Constring);

            try
            {
                connection.Open();
                SqlCommand command = new SqlCommand(procedurename);
                command.CommandType = CommandType.StoredProcedure;
                command.Connection = connection;
                if (paramsbindings.Length > 0)
                {
                    for (int iterate = 0; iterate < paramsbindings.Length; iterate++)
                    {
                        command.Parameters.AddWithValue("@" + paramsbindings[iterate][0], paramsbindings[iterate][1]);
                    }
                }
                using (SqlDataAdapter da = new SqlDataAdapter(command))
                {
                    DataTable records = new DataTable();
                    da.Fill(records);
                    da.Dispose();
                    connection.Close();
                    command.Dispose();
                    return records;
                }
                
            }
            catch (Exception ex) {

                connection.Close();
                DataTable dt = new DataTable();
                dt.Clear();
                dt.Columns.Add("Error");
                dt.Columns.Add("Message");
                dt.Rows.Add(new object[] { "500", ex.Message});
                return dt;

            }


        }

        public class SAP
        {
            public DataTable Start(string procedurename, string[][] paramsbindings)
            {
                try
                {
                    string Constring = FetchConfig.GetConfig("SAP_DB_CONF");
                    SqlConnection connection = new SqlConnection(Constring);
                    connection.Open();
                    SqlCommand command = new SqlCommand(procedurename);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Connection = connection;
                    if (paramsbindings.Length > 0)
                    {
                        for (int iterate = 0; iterate < paramsbindings.Length; iterate++)
                        {
                            command.Parameters.AddWithValue("@" + paramsbindings[iterate][0], paramsbindings[iterate][1]);
                        }
                    }
                    command.CommandTimeout = 0;
                    using (SqlDataAdapter da = new SqlDataAdapter(command))
                    {
                        DataTable records = new DataTable();
                        da.Fill(records);
                        connection.Close();
                        return records;
                    }
                }
                catch (Exception ex)
                {
                    DataTable dt = new DataTable();
                    dt.Clear();
                    dt.Columns.Add("Error");
                    dt.Columns.Add("Message");
                    dt.Rows.Add(new object[] { "500", ex.Message });
                    return dt;

                }


            }
        }
        public class SAP_PRD
        {
            public DataTable Start(string procedurename, string[][] paramsbindings)
            {
                try
                {
                    string Constring = FetchConfig.GetConfig("SAP_PROD_DB_CONF");
                    SqlConnection connection = new SqlConnection(Constring);
                    connection.Open();
                    SqlCommand command = new SqlCommand(procedurename);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Connection = connection;
                    if (paramsbindings.Length > 0)
                    {
                        for (int iterate = 0; iterate < paramsbindings.Length; iterate++)
                        {
                            command.Parameters.AddWithValue("@" + paramsbindings[iterate][0], paramsbindings[iterate][1]);
                        }
                    }
                    command.CommandTimeout = 0;
                    using (SqlDataAdapter da = new SqlDataAdapter(command))
                    {
                        DataTable records = new DataTable();
                        da.Fill(records);
                        connection.Close();
                        return records;
                    }
                }
                catch (Exception ex)
                {
                    DataTable dt = new DataTable();
                    dt.Clear();
                    dt.Columns.Add("Error");
                    dt.Columns.Add("Message");
                    dt.Rows.Add(new object[] { "500", ex.Message });
                    return dt;

                }


            }
        }
    }
   
}

using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Script.Serialization;

namespace Connect.Data
{
    public class Convert
    {
        public string toJson(DataTable contents) {

            JavaScriptSerializer jsSerializer = new JavaScriptSerializer();
            List<Dictionary<string, object>> parentRow = new List<Dictionary<string, object>>();
            Dictionary<string, object> childRow;
            foreach (DataRow row in contents.Rows)
            {
                childRow = new Dictionary<string, object>();
                foreach (DataColumn col in contents.Columns)
                {
                    childRow.Add(col.ColumnName, row[col]);
                }
                parentRow.Add(childRow);
            }
            return jsSerializer.Serialize(parentRow);

        }
    }
}

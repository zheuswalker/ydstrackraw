using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EMALLS.Models
{
    public class TrackOrders
    {
        
        public string TRD_STATUS { get; set; }
        public string TCR_ADDITIONAL_FEE { get; set; }
        public string RTD_TEAMNAME { get; set; }
        public string TCR_STATUS { get; set; }
        public string TCR_REQUESTID { get; set; }
        public string TCR_MODEOFTRANSFER { get; set; }
        public string TRI_PAYMENT_METHOD { get; set; }
        public string TCR_DATETOTRANSACT { get; set; }
        public string DASHERNAME { get; set; }
        public string TCR_ACTUALCOST { get; set; }
        public string TCR_PENDINGCOST { get; set; }
        public string RDI_PNUMB { get; set; }
        public string TCR_DELIVERYFEE { get; set; }
        public string TCR_SHOPPING_FEE { get; set; }
        public string TCR_SERVICE_FEE { get; set; }
        public string LOCATION { get; set; }
        public string STORENAME { get; set; }
        public string BUILDING { get; set; }
        public ItemStatusModel ITEM_STATUS { get; set; }
    }

    public class TrackOrdersModel
    {
        public TrackOrdersModel()
        {
            TrackOrders = new List<TrackOrders>();
            trackOrders = new TrackOrders();
        }
        public List<TrackOrders> TrackOrders { get; set; }
        public TrackOrders trackOrders { get; set; }
    }
}
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EMALLS.Models
{
    public class ItemStatus
    {
        
        public string TRI_BOUGHT { get; set; }
        public string TRI_PURCHASE_STATUS { get; set; }
        public string TRI_EXPECTED_AMOUNT { get; set; }
        public string TRI_ACTUALPRICE { get; set; }
        public string TRI_CUSTREMARKS { get; set; }
        public string TRI_DASHREMARKS { get; set; }
        public string TRI_QUANTITY { get; set; }
        public string TRI_ACTUAL_QUANTITY { get; set; }
        public string ITEMNAME { get; set; }
        public string ITEMPRICE { get; set; }
        public string ACTUALPRICE { get; set; }
        public string QUANTITY { get; set; }
        public string ACTUALQUANTITY { get; set; }
        public string CUSTOMERNOTE { get; set; }
        public string DASHERNOTE { get; set; }
        public string ITEMIMAGE { get; set; }
        public string STORENAME { get; set; }
        public string LOCATION { get; set; }
    }

    public class ItemStatusModel
    {
        public ItemStatusModel()
        {
            ItemStatus = new List<ItemStatus>();
            itemStatus = new ItemStatus();
        }
        public List<ItemStatus> ItemStatus { get; set; }
        public ItemStatus itemStatus { get; set; }
    }
}
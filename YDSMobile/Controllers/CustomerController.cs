using Connect.FetchConfig;
using EMALLS.Models;
using Newtonsoft.Json.Linq;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace YDSMobile.Controllers
{
    public class CustomerController : Controller
    {
        public DataTable dt_content { get; set; }
        String user_id = "";

        public string GetUserId()
        {
            try
            {
                if (HttpContext.Session["pubkey"].ToString().Equals("") || HttpContext.Session["pubkey"].ToString().Equals(null))
                    return null;
                else
                    return HttpContext.Session["pubkey"].ToString();
            }
            catch (Exception ex)
            {
                return null;
            }

        }

        // GET: Account
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Login() {
            return PartialView();

        }

        public ActionResult TrackOrders(string status) {
            if (status == null)
                status = "";
            ViewData["status"] = status;
            user_id = GetUserId();
            if (user_id == null || user_id == "") return RedirectToAction("Login", "Customer");
            else {
            
            dynamic json_object = JArray.Parse(new Connection().Call("TRANSACTION", Method.POST, new string[][] {
                    new string[]{ "pubkey", GetUserId() }
                }));

            TrackOrdersModel model = new TrackOrdersModel();
            JArray items = (JArray)json_object;
            int length = items.Count;
            for (int i = 0; i < length; i++)
            {

                JValue TRD_STATUS = ((JValue)items[i]["TRD_STATUS"].ToString());


                JValue TCR_ADDITIONAL_FEE = ((JValue)items[i]["TCR_ADDITIONAL_FEE"].ToString());
                JValue RTD_TEAMNAME = ((JValue)items[i]["RTD_TEAMNAME"].ToString());
                JValue TCR_STATUS = ((JValue)items[i]["TCR_STATUS"].ToString());
                JValue TCR_REQUESTID = ((JValue)items[i]["TCR_REQUESTID"].ToString());
                JValue TCR_MODEOFTRANSFER = ((JValue)items[i]["TCR_MODEOFTRANSFER"].ToString());
                JValue TCR_DATETOTRANSACT = ((JValue)items[i]["TCR_DATETOTRANSACT"].ToString());

                TrackOrders TrackOrders = new TrackOrders();
                TrackOrders.TRD_STATUS = TRD_STATUS.ToString();
                TrackOrders.TCR_ADDITIONAL_FEE = TCR_ADDITIONAL_FEE.ToString();
                TrackOrders.RTD_TEAMNAME = RTD_TEAMNAME.ToString();
                TrackOrders.TCR_STATUS = TCR_STATUS.ToString();
                TrackOrders.TCR_REQUESTID = TCR_REQUESTID.ToString();
                TrackOrders.TCR_MODEOFTRANSFER = TCR_MODEOFTRANSFER.ToString();
                TrackOrders.TCR_DATETOTRANSACT = TCR_DATETOTRANSACT.ToString();

                dynamic orderinfo = JArray.Parse(new Connection().Call("TRACK", Method.POST, new string[][] {
                    new string[]{ "pubkey", GetUserId() },
                    new string[]{ "transactionid", TCR_REQUESTID.ToString() }
                }));

                JArray orderitems = (JArray)orderinfo;
                int orderitemslength = orderitems.Count;
                for (int j = 0; j < orderitemslength; j++)
                {

                    JValue DASHERNAME = ((JValue)orderitems[j]["DASHERNAME"].ToString());
                    JValue RDI_PNUMB = ((JValue)orderitems[j]["RDI_PNUMB"].ToString());
                    JValue TCR_DELIVERYFEE = ((JValue)orderitems[j]["TCR_DELIVERYFEE"].ToString());
                    JValue TCR_SHOPPING_FEE = ((JValue)orderitems[j]["TCR_SHOPPING_FEE"].ToString());
                    JValue TCR_SERVICE_FEE = ((JValue)orderitems[j]["TCR_SERVICE_FEE"].ToString());
                    JValue ITEM_STATUS = ((JValue)orderitems[j]["ITEM_STATUS"].ToString());
                    JValue TCR_ACTUALCOST = ((JValue)orderitems[j]["TCR_ACTUALCOST"].ToString());

                    TrackOrders.DASHERNAME = (string)DASHERNAME;
                    TrackOrders.RDI_PNUMB = (string)RDI_PNUMB;
                    TrackOrders.TCR_DELIVERYFEE = (string)TCR_DELIVERYFEE;
                    TrackOrders.TCR_SHOPPING_FEE = (string)TCR_SHOPPING_FEE;
                    TrackOrders.TCR_SERVICE_FEE = (string)TCR_SERVICE_FEE;

                    JArray itemstatus = (JArray)JArray.Parse(orderitems[j]["ITEM_STATUS"].ToString());
                    int itemstatuslength = itemstatus.Count;
                    ItemStatusModel ItemStatusmodel = new ItemStatusModel();
                        double totalprice = 0.00;
                    for (int k = 0; k < itemstatuslength; k++)
                    {
                        ItemStatus ItemStatuscontent = new ItemStatus();
                        ItemStatuscontent.TRI_BOUGHT = ((JValue)itemstatus[k]["TRI_BOUGHT"]).ToString();
                        ItemStatuscontent.TRI_PURCHASE_STATUS = ((JValue)itemstatus[k]["TRI_PURCHASE_STATUS"]).ToString();
                        ItemStatuscontent.TRI_EXPECTED_AMOUNT = ((JValue)itemstatus[k]["TRI_EXPECTED_AMOUNT"]).ToString();
                        ItemStatuscontent.TRI_ACTUALPRICE = ((JValue)itemstatus[k]["TRI_ACTUALPRICE"]).ToString();
                            if (ItemStatuscontent.TRI_ACTUALPRICE == null)
                                totalprice += Double.Parse(ItemStatuscontent.TRI_EXPECTED_AMOUNT);
                        ItemStatuscontent.TRI_CUSTREMARKS = ((JValue)itemstatus[k]["TRI_CUSTREMARKS"]).ToString();
                        ItemStatuscontent.TRI_DASHREMARKS = ((JValue)itemstatus[k]["TRI_DASHREMARKS"]).ToString();
                        ItemStatuscontent.TRI_QUANTITY = ((JValue)itemstatus[k]["TRI_QUANTITY"]).ToString();
                        ItemStatuscontent.TRI_ACTUAL_QUANTITY = ((JValue)itemstatus[k]["TRI_ACTUAL_QUANTITY"]).ToString();
                        string TRI_PAYMENT_METHOD = ((JValue)itemstatus[k]["TRI_PAYMENT_METHOD"]).ToString();
                        string TRI_ACTUAL_PAYMENT_METHOD = ((JValue)itemstatus[k]["TRI_ACTUAL_PAYMENT_METHOD"]).ToString();
                            if (TRI_PAYMENT_METHOD == null)
                                TRI_PAYMENT_METHOD = TRI_ACTUAL_PAYMENT_METHOD;

                            if (TRI_ACTUAL_PAYMENT_METHOD != null)
                            if (TRI_ACTUAL_PAYMENT_METHOD.Length>0)
                                TRI_PAYMENT_METHOD = TRI_ACTUAL_PAYMENT_METHOD;
                            TrackOrders.TRI_PAYMENT_METHOD = TRI_PAYMENT_METHOD;
                        JArray a = JArray.Parse(((JValue)itemstatus[k]["TRI_ITEMNAME"]).ToString());
                        foreach (JObject o in a.Children<JObject>())
                        {

                            string RPA_NAME = "", TPSA_VALUE = "";
                            foreach (JProperty p in o.Properties())
                            {
                                string name = p.Name;
                                if (name == "RPA_NAME") RPA_NAME = (string)p.Value;
                                if (name == "TPSA_VALUE") TPSA_VALUE = (string)p.Value;
                            }
                            if (RPA_NAME.Equals("Item Name"))
                            {
                                ItemStatuscontent.ITEMNAME = TPSA_VALUE;
                            }
                            if (RPA_NAME.Equals("Price"))
                            {
                                    if (TPSA_VALUE != null)
                                        totalprice += Double.Parse(TPSA_VALUE.Replace("P","").Replace(",",""));
                            }
                            if (RPA_NAME.Equals("Store Name"))
                            {
                                ItemStatuscontent.STORENAME = TPSA_VALUE;
                                TrackOrders.STORENAME = TPSA_VALUE;
                            }
                            if (RPA_NAME.Equals("Image"))
                            {
                                    if (TPSA_VALUE.Length <= 0)
                                        TPSA_VALUE = "https://cdn.dailystoreatortigasmalls.com/Control/ImageViewer?uri=//10.0.1.96/yds/---/Uploads/GlobalConfig/03v3ov3d7f2fefc39f40ffba7b67ae2b25a554.png";
                                ItemStatuscontent.ITEMIMAGE = TPSA_VALUE;
                            }
                            if (RPA_NAME.Equals("Location"))
                            {
                                ItemStatuscontent.LOCATION = TPSA_VALUE;
                                TrackOrders.LOCATION = TPSA_VALUE;
                            }
                            if (RPA_NAME.Equals("Building"))
                            {
                                TrackOrders.BUILDING = TPSA_VALUE;
                            }
                        }
                        ItemStatusmodel.ItemStatus.Add(ItemStatuscontent);
                    }

                    if(TCR_ACTUALCOST.ToString().Length==0)
                        TrackOrders.TCR_PENDINGCOST = totalprice.ToString();
                    else
                        TrackOrders.TCR_PENDINGCOST = TCR_ACTUALCOST.ToString();
                        TrackOrders.ITEM_STATUS = ItemStatusmodel;

                }


                    if ((string)status.ToUpper() == "PENDING")
                    {
                        if ((string)TCR_STATUS.ToString().ToLower() != "cancelled" &&
                            (string)TCR_STATUS.ToString().ToLower() != "completed" &&
                            (string)TCR_STATUS.ToString().ToLower() != "cancel-hasitembought"
                            )
                            model.TrackOrders.Add(TrackOrders);

                    }
                    if ((string)status.ToUpper() == "COMPLETED")
                    {
                        if (
                            ((string)TCR_STATUS.ToString().ToLower() == "completed" ||
                            (string)TCR_STATUS.ToString().ToLower() == "cancel-hasitembought"
                            )
                            &&
                            (string)TRD_STATUS.ToString().ToLower()=="delivered"
                            )
                            model.TrackOrders.Add(TrackOrders);

                    }
                    if ((string)status.ToUpper() == "DELIVERY")
                    {
                        if (
                            ((string)TCR_STATUS.ToString().ToLower() == "completed" ||
                            (string)TCR_STATUS.ToString().ToLower() == "cancel-hasitembought"
                            )
                            &&
                            (string)TRD_STATUS.ToString().ToLower() != "delivered"
                            )
                            model.TrackOrders.Add(TrackOrders);

                    }
                    if ((string)status.ToUpper() == "CANCELLED")
                    {
                        if ((string)TCR_STATUS.ToString().ToLower() == "cancelled" )
                            model.TrackOrders.Add(TrackOrders);

                    }
                    if((int)status.ToUpper().Length==0)
                        model.TrackOrders.Add(TrackOrders);
                }
            return View(model);
            }
        }


        [HttpPost]
        public dynamic LoginAccount(string userkey, string password)
        {

            dynamic json_object = JArray.Parse(new Connection().Call("LOGIN",Method.POST, new string[][] {
                    new string[]{ "userkey", userkey },
                    new string[]{ "password", password }
                }));
            JArray items = (JArray)json_object;
            int length = items.Count;
            for (int i = 0; i < length; i++)
            {
                JValue RESULT = ((JValue)items[i]["RESULT"].ToString());
                if (RESULT.ToString() == "SUCCESS") {
                    JValue PUBKEY = ((JValue)items[i]["PUBKEY"].ToString());
                    JValue ISVERIFIED = ((JValue)items[i]["ISVERIFIED"].ToString());
                    System.Web.HttpContext.Current.Session["PUBKEY"] = PUBKEY.ToString();
                    System.Web.HttpContext.Current.Session["RESULT"] = RESULT.ToString();
                    System.Web.HttpContext.Current.Session["ISVERIFIED"] = ISVERIFIED.ToString();
                }
            }
            return json_object;
            
            }
    }
}
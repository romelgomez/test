import * as functions from 'firebase-functions';
import axios from "axios";


function get_data(data:any[] = [], page=1): any {

    const path = 'https://jsonmock.hackerrank.com/api/article_users?page=' + page.toString();

    return axios.get(path)
        .then(function (response) {

            console.log('response', response?.data?.data);
            console.log('parameters', [...data], page, path);

            const req_data = [...response?.data?.data || []];

            if (req_data.length > 0) {
                return get_data([...data, ...req_data], page+1)
            } 

            return Promise.resolve(data)
        })
        .catch(function (error) {
            console.log(error);
            
            return Promise.resolve([])
        });
}


// function get_data_mock() {
    
//     let data =  [
//         {
//            "id":1,
//            "username":"epaga",
//            "about":"Java developer / team leader at inetsoftware.de by day<p>iOS developer by night<p>http://www.mindscopeapp.com<p>http://inflightassistant.info<p>http://appstore.com/johngoering<p>[ my public key: https://keybase.io/johngoering; my proof: https://keybase.io/johngoering/sigs/I1UIk7t3PjfB5v2GI-fhiOMvdkzn370_Z2iU5GitXa0 ]<p>hnchat:oYwa7PJ4Yaf1Vw9Om4ju",
//            "submitted":654,
//            "updated_at":"2019-08-29T13:45:12.000Z",
//            "submission_count":197,
//            "comment_count":439,
//            "created_at":1301039509
//         },
//         {
//            "id":2,
//            "username":"patricktomas",
//            "about":"[ my public key: https://keybase.io/ptrcktms; my proof: https://keybase.io/ptrcktms/sigs/Z_woLEAc6ZrVtIAdZbAyp23r7vsL_clxNE3RE8DEmGQ ]",
//            "submitted":9,
//            "updated_at":"2019-01-29T22:47:01.000Z",
//            "submission_count":6,
//            "comment_count":3,
//            "created_at":1255392958
//         },
//         {
//            "id":3,
//            "username":"saintamh",
//            "about":"",
//            "submitted":8,
//            "updated_at":"2019-08-21T10:04:13.000Z",
//            "submission_count":4,
//            "comment_count":4,
//            "created_at":1267029423
//         },
//         {
//            "id":4,
//            "username":"panny",
//            "about":"",
//            "submitted":71,
//            "updated_at":"2019-09-06T11:13:29.000Z",
//            "submission_count":51,
//            "comment_count":15,
//            "created_at":1510174513
//         },
//         {
//            "id":5,
//            "username":"olalonde",
//            "about":"olalonde@gmail.com<p>http://www.github.com/olalonde<p>CTO/Co-Founder @ https://binded.com",
//            "submitted":4561,
//            "updated_at":"2019-09-08T09:26:52.000Z",
//            "submission_count":1032,
//            "comment_count":3045,
//            "created_at":1261051630
//         },
//         {
//            "id":6,
//            "username":"WisNorCan",
//            "about":"bayesian optimist",
//            "submitted":177,
//            "updated_at":"2019-07-26T01:40:10.000Z",
//            "submission_count":42,
//            "comment_count":107,
//            "created_at":1497196382
//         },
//         {
//            "id":7,
//            "username":"dmmalam",
//            "about":"Cofounder OctaveWealth (YCS12)",
//            "submitted":765,
//            "updated_at":"2019-08-12T21:38:21.000Z",
//            "submission_count":645,
//            "comment_count":115,
//            "created_at":1312041112
//         },
//         {
//            "id":8,
//            "username":"replicatorblog",
//            "about":"https://twitter.com/josephflaherty<p>Formerly Wired:<p>https://www.wired.com/author/joseph-flaherty/<p>Now covering startups for Founder Collective, a fantastic VC firm:<p>http://www.foundercollective.com/",
//            "submitted":1441,
//            "updated_at":"2019-09-06T02:06:35.000Z",
//            "submission_count":550,
//            "comment_count":790,
//            "created_at":1224455310
//         },
//         {
//            "id":9,
//            "username":"eightturn",
//            "about":"twitter: @searchbound",
//            "submitted":84,
//            "updated_at":"2019-08-10T21:33:15.000Z",
//            "submission_count":7,
//            "comment_count":75,
//            "created_at":1405978844
//         },
//         {
//            "id":10,
//            "username":"vladikoff",
//            "about":"[ my public key: https://keybase.io/vladikoff; my proof: https://keybase.io/vladikoff/sigs/jxMsGDORM-qiAf0bQy91Uw4RYpHNeQa1bZD3WFdIZWo ]",
//            "submitted":65,
//            "updated_at":"2019-05-10T22:04:36.000Z",
//            "submission_count":15,
//            "comment_count":50,
//            "created_at":1298054029
//         },
//         {
//            "id":11,
//            "username":"mpweiher",
//            "about":"http://blog.metaobject.com/<p>http://www.metaobject.com/<p>http://objective.st/",
//            "submitted":5967,
//            "updated_at":"2019-09-07T19:35:03.000Z",
//            "submission_count":3342,
//            "comment_count":2577,
//            "created_at":1333104319
//         },
//         {
//            "id":12,
//            "username":"coloneltcb",
//            "about":"I work at Twilio, with Jol Franusic. Comments are my own.<p>[ my public key: https://keybase.io/selviano; my proof: https://keybase.io/selviano/sigs/fxZxeSakx-aPR2d0iICZU9FpHnDqPDW0Kz4s9OkrGS0 ]",
//            "submitted":2249,
//            "updated_at":"2019-08-31T20:31:24.000Z",
//            "submission_count":2137,
//            "comment_count":88,
//            "created_at":1205248131
//         },
//         {
//            "id":13,
//            "username":"guelo",
//            "about":"",
//            "submitted":4996,
//            "updated_at":"2019-09-07T13:09:59.000Z",
//            "submission_count":72,
//            "comment_count":4595,
//            "created_at":1247879051
//         },
//         {
//            "id":14,
//            "username":"frederfred",
//            "about":"web developer",
//            "submitted":4,
//            "updated_at":"2018-03-22T13:44:20.000Z",
//            "submission_count":3,
//            "comment_count":1,
//            "created_at":1361951997
//         },
//         {
//            "id":15,
//            "username":"pkiller",
//            "about":"",
//            "submitted":32,
//            "updated_at":"2019-04-07T21:56:40.000Z",
//            "submission_count":1,
//            "comment_count":31,
//            "created_at":1539079554
//         }
//      ];

//     return Promise.resolve(data);
// }


export const helloWorld = functions.https.onRequest((request, response) => {

    let threshold = 10;

    get_data()
        .then((data: any) => {

            console.log('final data', data);

            let usersnames = [...data]
                .filter((x) => x.submission_count > threshold)
                .map(user => user.username);
                // .join('\n')

            return Promise.resolve(usersnames)
        })
        .then((result: any)  => {

            functions.logger.info(result);

            response.send(result);
        })
        .catch((e: any) => {

            functions.logger.error(e);

            response.send(e.toString());

        });
});

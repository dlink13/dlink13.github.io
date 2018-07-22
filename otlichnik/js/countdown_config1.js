$(document).ready(function() {
    
$('#countdown_dashboard').countDown({
					targetDate: {
						'day': 		1,
						'month': 	06,
						'year': 	2019,
						'hour': 	10,
						'min': 		00,
						'sec': 		00,	
						'utc':      true,
						},
					omitWeeks: true					
				});               
                             
});